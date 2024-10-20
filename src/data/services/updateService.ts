'use server';
import { createClient } from '@/utils/supabase/server';
import { getUserId } from '@/data/getUserIdServer';
import { revalidatePath } from 'next/cache';

export const updateService = async (
  values: {
    title: string;
    description: string;
    duration: string;
    cost: number;
  },
  serviceId: string
): Promise<string | undefined> => {
  const supabase = createClient();

  const userId = await getUserId();

  const mappedValues = {
    titulo: values.title,
    descripcion: values.description,
    duracion: values.duration,
    precio: values.cost,
  };

  const { error: updateError } = await supabase
    .from('servicios')
    .update(mappedValues)
    .eq('id_user', userId)
    .eq('id', serviceId);

  if (updateError) {
    console.error('🚀 ~ updateError:', updateError.message);
    return updateError.message;
  }

  revalidatePath('/services');
  return;
};
