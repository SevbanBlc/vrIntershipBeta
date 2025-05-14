import { createClient } from '@supabase/supabase-js';

// Supabase URL ve anon key'inizi environment değişkenlerinden alın
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

// Supabase istemcisini oluştur
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
