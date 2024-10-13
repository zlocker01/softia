import { createClient } from '@/utils/supabase/client';

const supabase = createClient();

export const getUserId = async (): Promise<string | null> => {
  const { data, error: errorUser } = await supabase.auth.getUser();

  if (errorUser || !data?.user) {
    console.error('Error fetching user:', errorUser?.message);
    return null;
  }
  const userId = data.user.id;
  return userId;
};
