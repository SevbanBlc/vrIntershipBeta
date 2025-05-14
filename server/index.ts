import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import { config } from "./config/environment";
import { connectToSupabase, supabase } from "./config/supabase";
import { setupAuth } from "./middleware/auth.middleware";
import { authRoutes } from "./routes/auth.routes";
import { progressRoutes } from "./routes/progress.routes";
import { setupVite, serveStatic, log } from "./vite";

const app = express();

// Updated CORS configuration to allow both development and production origins
const allowedOrigins = [
  'http://localhost:5000',
  'http://localhost:5173',
  'https://vrintershipapi.onrender.com'
];

app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.indexOf(origin) === -1) {
      return callback(null, false);
    }
    return callback(null, true);
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Request logging middleware
app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

// Connect to Supabase
connectToSupabase().then((connected) => {
  if (!connected) {
    process.exit(1);
  }
});

// Setup authentication
setupAuth(app);

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/progress', progressRoutes);

// Enhanced error handling for /api/me endpoint
app.get('/api/me', async (req: Request, res: Response) => {
  try {
    const authHeader = req.headers.authorization;
    
    if (!authHeader) {
      return res.status(401).json({ 
        message: "No authorization header",
        details: "Please ensure you're logged in and the token is included in the request"
      });
    }

    const token = authHeader.replace('Bearer ', '');
    const { data: { user }, error } = await supabase.auth.getUser(token);

    if (error) {
      return res.status(401).json({ 
        message: "Authentication failed",
        details: error.message
      });
    }

    if (!user) {
      return res.status(404).json({ 
        message: "User not found",
        details: "The user associated with this token could not be found"
      });
    }

    // Get additional user data from the users table
    const { data: userData, error: userError } = await supabase
      .from('users')
      .select('*')
      .eq('id', user.id)
      .single();

    if (userError) {
      return res.status(500).json({ 
        message: "Failed to fetch user data",
        details: userError.message
      });
    }

    res.json(userData);
  } catch (err) {
    console.error('Error in /api/me:', err);
    res.status(500).json({ 
      message: "Internal Server Error",
      details: err instanceof Error ? err.message : "An unexpected error occurred"
    });
  }
});

app.get('/api/users', async (req: Request, res: Response) => {
  try {
    const { data, error } = await supabase.from('users').select('*');

    if (error) {
      return res.status(500).json({ 
        message: "Failed to retrieve users",
        details: error.message
      });
    }

    res.json(data);
  } catch (err) {
    console.error('Error in /api/users:', err);
    res.status(500).json({ 
      message: "Internal Server Error",
      details: err instanceof Error ? err.message : "An unexpected error occurred"
    });
  }
});

// Error handling middleware
app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  console.error('Global error handler:', err);
  const status = err.status || err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  const details = err.details || err.stack || "No additional details available";
  
  res.status(status).json({ 
    message,
    details: process.env.NODE_ENV === 'development' ? details : undefined
  });
});

// Static file serving and API fallback
if (app.get("env") === "development") {
  setupVite(app);
} else {
  serveStatic(app);
}

// Catch-all route for API endpoints
app.use('/api/*', (req, res) => {
  res.status(404).json({ 
    error: 'API endpoint not found',
    path: req.path
  });
});

// Start server
app.listen(config.port, "0.0.0.0", () => {
  log(`Server running on port ${config.port}`);
  log(`Allowed origins: ${allowedOrigins.join(', ')}`);
});

export default app;