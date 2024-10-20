import { createClient } from '@/utils/supabase/server';

export const getUserId = async (): Promise<string | null> => {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  if (!data || error) {
    console.error('error!!! -->', error?.message);
    return null;
  }
  const userId = data.user.id;
  return userId;
};
