import { createClient } from '@/utils/supabase/client';
import { getUserId } from '@/data/getUserIdClient';

const supabase = createClient();

export const postBusiness = async (
  values: any
): Promise<string | undefined> => {
  const userId = await getUserId();

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

  const { error } = await supabase
    .from('negocios')
    .upsert(mappedValues)
    .select();
  if (error) {
    console.error('❌ error!!! -->', error.message);
    return error.message;
  }
  return;
};
