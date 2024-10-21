'use server';
import { createClient } from '@/utils/supabase/server';
import { getUserId } from '../getUserIdServer';
import { revalidatePath } from 'next/cache';

export const deleteService = async ({
  params,
}: {
  params: { id: string };
}): Promise<boolean> => {
  const supabase = createClient();

  const userId = await getUserId();
  const serviceId = params.id;

  const { error } = await supabase
    .from('servicios')
    .delete()
    .eq('id_user', userId)
    .eq('id', serviceId)
    .single();
  if (error) {
    console.error('🚀 ~ deleteService ~ error:', error.message);
    return false;
  }

  revalidatePath('/servicios');
  return true;
};
