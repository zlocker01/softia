import { createClient } from '@/utils/supabase/server';
import { getUserId } from '@/data/getUserIdServer';
import { Service } from '@/interfaces/services/Service';

export const getService = async (
  serviceId: string
): Promise<Service | null> => {
  const supabase = createClient();

  const userId = await getUserId();

  const { data: service, error: getServiceError } = await supabase
    .from('servicios')
    .select('*')
    .eq('id_user', userId)
    .eq('id', serviceId)
    .single();

  if (getServiceError) {
    console.error('🚀 ~ getServiceError:', getServiceError.message);
    return null;
  }

  if (!service) {
    console.error('🚀 ~ No founded existing service with ID:', serviceId);
    return null;
  }

  return service;
};
