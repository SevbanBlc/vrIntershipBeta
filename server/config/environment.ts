import { config as loadEnv } from "dotenv";
loadEnv();

export const config = {
  port: process.env.PORT || 3000,
  supabaseUrl: process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL,
  supabaseKey: process.env.SUPABASE_ANON_KEY || process.env.VITE_SUPABASE_ANON_KEY,
  jwtSecret: process.env.JWT_SECRET || "40SmG3Z084pPmEMajRci3X0lw0UFzU9UGTk8PGuOuxKdWP0KW4WPn5x5EuoDIhyobn8c4FGeiTnkDOEszpOPhg==",
  isProduction: process.env.NODE_ENV === "production"
};

// Validate required environment variables
if (!config.supabaseUrl || !config.supabaseKey) {
  console.error("Environment variables check failed:");
  console.error("SUPABASE_URL/VITE_SUPABASE_URL:", config.supabaseUrl);
  console.error("SUPABASE_ANON_KEY/VITE_SUPABASE_ANON_KEY:", config.supabaseKey ? "[SET]" : "[NOT SET]");
  throw new Error(
    "Missing Supabase credentials. Please ensure VITE_SUPABASE_URL/SUPABASE_URL and VITE_SUPABASE_ANON_KEY/SUPABASE_ANON_KEY are set in your environment variables."
  );
}