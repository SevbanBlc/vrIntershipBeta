import { createClient } from '@supabase/supabase-js';
import { Express } from 'express';

// Supabase Client Setup
const supabaseUrl = process.env.SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_KEY || '';
const supabase = createClient(supabaseUrl, supabaseKey);

export function setupAuth(app: Express) {
  app.post("/api/register", async (req, res) => {
    try {
      const { email, password, name, age } = req.body;

      // Check if user exists
      const { data: existingUsers, error: fetchError } = await supabase
        .from('users')
        .select('id')
        .eq('email', email);

      if (fetchError) throw fetchError;

      if (existingUsers && existingUsers.length > 0) {
        return res.status(400).json({
          error: "User already exists with this email"
        });
      }

      // Create auth user
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email,
        password,
      });

      if (authError) throw new Error(authError.message);

      if (!authData.user) {
        throw new Error("No user returned from signup");
      }

      // Create user profile
      const { data: userData, error: userError } = await supabase
        .from('users')
        .insert([
          {
            id: authData.user.id,
            email,
            name,
            age,
          }
        ])
        .select();

      if (userError || !userData || userData.length === 0) {
        // Cleanup auth user if profile creation fails
        await supabase.auth.admin.deleteUser(authData.user.id);
        throw new Error("Failed to create user profile");
      }

      res.status(201).json(userData[0]);
    } catch (error) {
      console.error("Registration error:", error);
      res.status(500).json({
        error: error instanceof Error ? error.message : "Registration failed"
      });
    }
  });

  app.post("/api/login", async (req, res) => {
    try {
      const { email, password } = req.body;

      const { data: { session }, error: authError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (authError) {
        return res.status(401).json({
          error: "Invalid credentials"
        });
      }

      if (!session) {
        return res.status(401).json({
          error: "No session returned"
        });
      }

      const { data: userData, error: userError } = await supabase
        .from('users')
        .select('*')
        .eq('id', session.user.id);

      if (userError || !userData || userData.length === 0) {
        return res.status(500).json({
          error: "Failed to fetch user data"
        });
      }

      res.json(userData[0]);
    } catch (error) {
      console.error("Login error:", error);
      res.status(500).json({
        error: "Login failed"
      });
    }
  });

  app.post("/api/logout", async (req, res) => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      res.sendStatus(200);
    } catch (error) {
      console.error("Logout error:", error);
      res.status(500).json({
        error: "Logout failed"
      });
    }
  });

  app.get("/api/me", async (req, res) => {
    try {
      const { data: { session }, error: sessionError } = await supabase.auth.getSession();

      if (sessionError || !session) {
        return res.status(401).json({
          error: "Not authenticated"
        });
      }

      const { data: userData, error: userError } = await supabase
        .from('users')
        .select('*')
        .eq('id', session.user.id);

      if (userError || !userData || userData.length === 0) {
        return res.status(500).json({
          error: "Failed to fetch user data"
        });
      }

      res.json(userData[0]);
    } catch (error) {
      console.error("Get user error:", error);
      res.status(500).json({
        error: "Failed to get user data"
      });
    }
  });
}
