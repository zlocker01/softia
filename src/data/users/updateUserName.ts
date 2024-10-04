import { createClient } from '@/utils/supabase/client';
import { UserName } from '@/interfaces/users/UserName';

export const updateUserName = async (
  values: UserName
): Promise<string | null> => {
  const supabase = createClient();
  const { error } = await supabase.auth.updateUser({
    data: {
      name: values.name || 'Nombre de Usuario',
    },
  });
  if (error) {
    return error.message;
  }
  return null;
};
