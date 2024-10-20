import { NextResponse } from 'next/server';
import { createClient } from '@/utils/supabase/server';

export async function GET({ params }: { params: { id: string } }) {
  const supabase = createClient();
  const serviceId = params.id;

  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    return NextResponse.json(
      { error: 'No se pudo obtener el usuario autenticado' },
      { status: 401 }
    );
  }

  const userId = user.id;

  const { data, error } = await supabase
    .from('servicios')
    .select('*')
    .eq('id_user', userId)
    .eq('id', serviceId)
    .single();

  if (error) {
    console.error('🚀 ~ Error obteniendo el servicio:', error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ service: data }, { status: 200 });
}
