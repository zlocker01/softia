'use server';

import { createClient } from '@/utils/supabase/server';
import { getUserId } from '@/data/getUserIdServer';
import { revalidatePath } from 'next/cache';

const supabase = createClient();

export const postBusiness = async (values: {
  name: string;
  location: string;
  number: string;
  email: string;
  openingHours: string;
  closingHours: string;
  description: string;
  days: string[];
}): Promise<string | undefined> => {
  const userId = await getUserId();

  const { data: business, error: fetchError } = await supabase
    .from('negocios')
    .select('*')
    .eq('id_user', userId)
    .single();

  if (fetchError && fetchError.code !== 'PGRST116') {
    // if isn't 'no rows found error'
    console.error('❌ Error fetching business -->', fetchError.message);
    return fetchError.message;
  }

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
    const { error: updateError } = await supabase
      .from('negocios')
      .update(mappedValues)
      .eq('id_user', userId);

    if (updateError) {
      console.error('❌ Error updating business -->', updateError.message);
      return updateError.message;
    }
  } else {
    const { error: insertError } = await supabase
      .from('negocios')
      .insert(mappedValues);

    if (insertError) {
      console.error('❌ Error inserting business -->', insertError.message);
      return insertError.message;
    }
  }

  revalidatePath('/chatbot');
  return;
};
