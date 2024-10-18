'use server';
import { createClient } from '@/utils/supabase/server';
import { getUserId } from '@/data/getUserIdServer';
import { revalidatePath } from 'next/cache';

const supabase = createClient();

export const postBusiness = async (
  values: any
): Promise<string | undefined> => {
  const userId = await getUserId();

  const { data: business } = await supabase
    .from('negocios')
    .select('*')
    .eq('id_user', userId)
    .single();

  const mappedValues = {
    nombre_negocio: values.name,
    ubicacion: values.location,
    telefono_contacto: values.number,
    email_contacto: values.email,
    horario_apertura: values.openingHours,
    horario_cierre: values.closingHours,
    descripcion: values.description,
    dias_laborales: values.days,
    id_user: userId,
  };

  if (business) {
    const { error } = await supabase
      .from('negocios')
      .update(mappedValues)
      .eq('id_user', userId);

    if (error) {
      console.error('❌ Error updating business -->', error.message);
      return error.message;
    }
  } else {
    const { error } = await supabase.from('negocios').insert(mappedValues);

    if (error) {
      console.error('❌ Error inserting business -->', error.message);
      return error.message;
    }
  }

  revalidatePath('/chatbot');
  return;
};
