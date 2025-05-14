import { createClient } from '@supabase/supabase-js';
import { config } from './environment';
import fetch from 'node-fetch';

// Create Supabase client with fetch implementation
export const supabase = createClient(
  config.supabaseUrl,
  config.supabaseKey,
  {
    auth: {
      persistSession: false
    },
    global: {
      fetch: fetch as unknown as typeof globalThis.fetch
    }
  }
);

export async function connectToSupabase() {
  try {
    const { data, error } = await supabase.from('users').select('count');
    if (error) {
      console.error('Failed to connect to Supabase:', error.message);
      return false;
    }
    console.log('Successfully connected to Supabase');
    return true;
  } catch (error) {
    console.error('Error connecting to Supabase:', error);
    return false;
  }
}