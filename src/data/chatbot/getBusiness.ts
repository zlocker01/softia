import { createClient } from '@/utils/supabase/server';
import { getUserId } from '@/data/getUserIdServer';
import { Business } from '@/interfaces/users/Business';

const supabase = createClient();

export const getBusiness = async (): Promise<Business | null> => {
  const userId = await getUserId();

  if (!userId) {
    console.error('error!!! -->', 'no user found');
    return null;
  }
  const { data, error } = await supabase
    .from('negocios')
    .select('*')
    .eq('id_user', userId)
    .single();
  if (error) {
    console.error('🚀 ~ getBusiness ~ error:', error.message);
    return null;
  }
  return data;
};
