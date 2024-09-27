import { createClient } from '@/utils/supabase/client';
import { NextResponse } from 'next/server';

const supabase = createClient();

export async function POST(request: Request) {
  try {
    const newUser = await request.json();

    const { data, error } = await supabase
      .from('usuarios')
      .insert([newUser])
      .select();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ data }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
