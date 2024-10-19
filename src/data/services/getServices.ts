import { createClient } from '@/utils/supabase/server';
import { getUserId } from '@/data/getUserIdServer';
import { Service } from '@/interfaces/services/Service';

const supabase = createClient();

export const getServices = async (): Promise<Service[] | null> => {
  const userId = await getUserId();

  if (!userId) {
    console.error('error!!! -->', 'no user found');
    return null;
  }
  const { data, error } = await supabase
    .from('servicios')
    .select('*')
    .eq('id_user', userId);
  if (error) {
    console.error('🚀 ~ getBusiness ~ error:', error.message);
    return null;
  }
  return data;
};
