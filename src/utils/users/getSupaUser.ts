import { redirect } from 'next/navigation';
import { createClient } from '@/utils/supabase/server';
import { User } from '@supabase/supabase-js';
import { useUserStore } from '@/store/users/useUserStore';
import { SupaUser } from '@/interfaces/users/SupaUser';

/**
 * @description Gets the current user from Supabase and formats it into a SupaUser interface.
 * If the user is not logged in, it redirects to the login page and saves the user to the store.
 * @returns The current user as a SupaUser object, or null if the user is not logged in.
 */
export const getSupaUser = async (): Promise<User | null> => {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect('/login');
    console.log(error);
    return null;
  }
  const user = data.user;

  const formattedUser: SupaUser = {
    id: user.id,
    name: user.user_metadata.name,
    email: user.email,
  };

  const { setUser } = useUserStore.getState();
  setUser(formattedUser);
  return user;
};
