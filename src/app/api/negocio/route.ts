import { NextResponse } from 'next/server';
import { createClient } from '@/utils/supabase/server';
import { Business } from '@/interfaces/users/Business';

export async function GET() {
  const supabase = createClient();

  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    return new NextResponse(
      JSON.stringify({ error: 'No se pudo obtener el usuario autenticado' }),
      {
        status: 401,
      }
    );
  }

  const userId = user.id;

  const { data, error } = await supabase
    .from('negocios')
    .select('*')
    .eq('id_user', userId)
    .single();
  if (error) {
    console.error('🚀 ~ getBusiness ~ error:', error.message);
    return new NextResponse(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }

  const response: Business = data;
  return new NextResponse(JSON.stringify({ response }), {
    status: 200,
  });
}
