/*
  # Initial Schema Setup

  1. Tables
    - users: Store user information
    - user_progress: Store user progress data
    - stories: Store story content
  
  2. Security
    - Enable RLS
    - Add policies for authenticated access
*/

-- Stories table
CREATE TABLE IF NOT EXISTS stories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  type TEXT NOT NULL,
  part_number INTEGER NOT NULL,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  image TEXT,
  dimension TEXT,
  choices JSONB,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE(type, part_number)
);

-- Enable RLS for stories table
ALTER TABLE stories ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DO $$ 
BEGIN
  DROP POLICY IF EXISTS "Everyone can read stories" ON stories;
  DROP POLICY IF EXISTS "Only admins can modify stories" ON stories;
EXCEPTION
  WHEN undefined_object THEN NULL;
END $$;

-- Create policies for stories table
CREATE POLICY "Everyone can read stories" ON stories
  FOR SELECT USING (true);

CREATE POLICY "Only admins can modify stories" ON stories
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM users
      WHERE users.id = auth.uid()
      AND users.is_admin = true
    )
  );

-- Create index for faster story lookups
CREATE INDEX IF NOT EXISTS idx_stories_type ON stories(type);
CREATE INDEX IF NOT EXISTS idx_stories_part_number ON stories(part_number);