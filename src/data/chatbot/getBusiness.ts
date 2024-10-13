import { createClient } from '@/utils/supabase/client';
import { getUserId } from '@/data/getUserIdServer';

const supabase = createClient();

export const getBusiness = async (): Promise<object | null> => {
  const userId = await getUserId();

  if (!userId) {
    console.error('error!!! -->', 'no user');
  }
  const { data, error } = await supabase
    .from('negocios')
    .select('*')
    .eq('id_user', userId)
    .single();
  if (error) {
    console.error('❌ Error ->:', error.message);
    return null;
  }
  return data;
};
