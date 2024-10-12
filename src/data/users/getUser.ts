import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';

export const getUser = async (): Promise<unknown | null> => {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error) {
    console.error('Error fetching user:', error);
    redirect('http://localhost:3000/login');
  }
  const user = (await data.user.user_metadata) || null;
  return user;
};
