'use client';
import { createClient } from '@/utils/supabase/client';
import { Button } from '../ui/button';

export const Logout = () => {
  const supabase = createClient();
  async function signOut() {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error(error);
    } else {
      window.location.replace('/login');
    }
  }
  return <Button onClick={signOut}>Cerrar Sesión</Button>;
};
