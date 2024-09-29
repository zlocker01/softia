import { createClient } from '@/utils/supabase/server';
import { User } from '@/interfaces/users/User';

/**
 * @description Gets the current user from Supabase, updates their metadata,
 * and returns a formatted User object. Returns null if there is no user.
 * @returns {Promise<User | null>} The current user as a formatted User object, or null if no user is logged in.
 */
export const getUser = async (): Promise<User | null> => {
  const supabase = createClient();

  const { data: userResponse, error: getUserError } =
    await supabase.auth.getUser();

  if (getUserError || !userResponse?.user) {
    console.error('Error fetching user:', getUserError);
    return null;
  }

  const user = userResponse.user;

  const { error: updateError } = await supabase.auth.updateUser({
    data: {
      pagado: false,
      plan: 'Basico',
    },
  });

  if (updateError) {
    console.error('Error updating user metadata:', updateError);
    return null;
  }

  // Formatear el objeto del usuario con los campos necesarios
  const formattedUser: User = {
    id: user.id || '',
    name: user.user_metadata?.name || '',
    email: user.email || '',
    pagado: user.user_metadata?.pagado || false,
    plan: user.user_metadata?.plan,
  };

  return formattedUser;
};
