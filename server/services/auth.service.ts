import { supabase } from '../config/supabase';
import { generateToken } from '../utils/jwt.utils';

export const authService = {
  async register(email: string, password: string, name: string, age: number) {
    try {
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email,
        password
      });

      if (authError) throw authError;

      const { data: userData, error: userError } = await supabase
        .from('users')
        .insert([
          { 
            id: authData.user?.id,
            email,
            name,
            age
          }
        ])
        .select()
        .single();

      if (userError) throw userError;

      const token = generateToken(userData.id);
      return { user: userData, token };
    } catch (error) {
      throw error;
    }
  },

  async login(email: string, password: string) {
    try {
      const { data: { user }, error } = await supabase.auth.signInWithPassword({
        email,
        password
      });

      if (error) throw error;
      if (!user) throw new Error('User not found');

      const { data: userData } = await supabase
        .from('users')
        .select('*')
        .eq('id', user.id)
        .single();

      const token = generateToken(user.id);
      return { user: userData, token };
    } catch (error) {
      throw error;
    }
  }
};