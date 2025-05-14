/*
  # Add admin flag and cleanup functionality
  
  1. Changes
    - Add admin column to users table
    - Add last_login column to users table
    - Add cleanup function for inactive users
    - Add cleanup function for completed progress
  
  2. Security
    - Add policies for admin access
*/

-- First, add the required columns
ALTER TABLE users ADD COLUMN IF NOT EXISTS is_admin BOOLEAN DEFAULT false;
ALTER TABLE users ADD COLUMN IF NOT EXISTS last_login TIMESTAMPTZ DEFAULT now();

-- Create extension for scheduled jobs
CREATE EXTENSION IF NOT EXISTS pg_cron;

-- Create cleanup functions
CREATE OR REPLACE FUNCTION cleanup_inactive_users()
RETURNS void AS $$
BEGIN
  DELETE FROM user_progress
  WHERE user_id IN (
    SELECT id FROM users
    WHERE last_login < now() - INTERVAL '14 days'
  );
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION cleanup_completed_progress()
RETURNS void AS $$
BEGIN
  DELETE FROM user_progress
  WHERE current_step = 'results'
  AND updated_at < now() - INTERVAL '1 hour';
END;
$$ LANGUAGE plpgsql;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Admins can read all users" ON users;
DROP POLICY IF EXISTS "Admins can update all users" ON users;
DROP POLICY IF EXISTS "Admins can read all progress" ON user_progress;
DROP POLICY IF EXISTS "Admins can update all progress" ON user_progress;

-- Create admin policies
CREATE POLICY "Admins can read all users" ON users
  FOR SELECT TO authenticated
  USING (is_admin = true);

CREATE POLICY "Admins can update all users" ON users
  FOR UPDATE TO authenticated
  USING (is_admin = true);

CREATE POLICY "Admins can read all progress" ON user_progress
  FOR SELECT TO authenticated
  USING (EXISTS (
    SELECT 1 FROM users
    WHERE users.id = auth.uid()
    AND users.is_admin = true
  ));

CREATE POLICY "Admins can update all progress" ON user_progress
  FOR UPDATE TO authenticated
  USING (EXISTS (
    SELECT 1 FROM users
    WHERE users.id = auth.uid()
    AND users.is_admin = true
  ));

-- Schedule cleanup jobs
SELECT cron.schedule(
  'cleanup-inactive-users',
  '0 0 * * *', -- Run daily at midnight
  'SELECT cleanup_inactive_users()'
);

SELECT cron.schedule(
  'cleanup-completed-progress',
  '*/15 * * * *', -- Run every 15 minutes
  'SELECT cleanup_completed_progress()'
);