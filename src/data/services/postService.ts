'use server';
import { createClient } from '@/utils/supabase/server';
import { getUserId } from '@/data/getUserIdServer';
import { revalidatePath } from 'next/cache';

const supabase = createClient();

export const postsService = async (values: {
  title: string;
  description: string;
  duration: string;
  cost: number;
}): Promise<string | undefined> => {
  const userId = await getUserId();

  const { data: services, error: fetchError } = await supabase
    .from('servicios')
    .select('*')
    .eq('id_user', userId);

  if (fetchError) {
    console.error('🚀 ~ fetchError:', fetchError.message);
    return fetchError.message;
  }

  const mappedValues = {
    titulo: values.title,
    descripcion: values.description,
    duracion: values.duration,
    precio: values.cost,
    id_user: userId,
  };

  if (services && services.length > 0) {
    const { error: updateError } = await supabase
      .from('servicios')
      .update(mappedValues)
      .eq('id_user', userId);

    if (updateError) {
      console.error('🚀 ~ updateError:', updateError.message);
      return updateError.message;
    }
  } else {
    const { error: insertError } = await supabase
      .from('servicios')
      .insert(mappedValues);

    if (insertError) {
      console.error('🚀 ~ insertError:', insertError.message);
      return insertError.message;
    }
  }

  revalidatePath('/chatbot');
  return;
};
