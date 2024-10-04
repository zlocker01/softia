import z from 'zod';
import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/utils/supabase/client';
import { idUserSchema } from '@/schemas/userSchemas/idUserSchema';

const supabase = createClient();

export async function GET(req: NextRequest) {
  try {
    const { pathname } = new URL(req.url);
    const id = pathname.split('/').pop();
    idUserSchema.parse(id);

    const { data, error } = await supabase.auth.getUser();
    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ errors: error.errors }, { status: 400 });
    }
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function PUT(req: NextRequest) {
  try {
    const id = req.url.split('/').pop();
    idUserSchema.parse(id);

    const body = await req.json();

    const { data, error } = await supabase
      .from('usuarios')
      .update(body)
      .eq('id', id);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ errors: error.errors }, { status: 400 });
    }
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const id = req.url.split('/').pop();
    idUserSchema.parse(id);

    const { data, error } = await supabase
      .from('usuarios')
      .delete()
      .eq('id', id);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ errors: error.errors }, { status: 400 });
    }
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
