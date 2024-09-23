import { redirect } from 'next/navigation';
import { createClient } from '@/utils/supabase/server';

export default async function PrivatePage() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect('/login');
  }
  const user = data.user.user_metadata;

  return (
    <div className="flex flex-col justify-center items-center">
      <h2>Bienvenido {user.name}</h2>
      <p>Correo: {user.email}</p>
    </div>
  );
}
