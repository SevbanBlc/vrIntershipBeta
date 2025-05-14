import { supabase } from '../config/supabase';

export const progressService = {
  async saveProgress(userId: string, data: any) {
    const { data: existingProgress } = await supabase
      .from('user_progress')
      .select()
      .eq('user_id', userId)
      .single();

    if (existingProgress) {
      const { data: updatedProgress, error } = await supabase
        .from('user_progress')
        .update(data)
        .eq('user_id', userId)
        .select()
        .single();

      if (error) throw error;
      return updatedProgress;
    } else {
      const { data: newProgress, error } = await supabase
        .from('user_progress')
        .insert([{ user_id: userId, ...data }])
        .select()
        .single();

      if (error) throw error;
      return newProgress;
    }
  },

  async getProgress(userId: string) {
    const { data, error } = await supabase
      .from('user_progress')
      .select()
      .eq('user_id', userId)
      .single();

    if (error) throw error;
    return data;
  }
};