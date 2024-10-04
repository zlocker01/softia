import { redirect } from 'next/navigation';
import { createClient } from '@/utils/supabase/server';
import { CardUser } from '@/components/users/CardUser';

export const revalidate = 60;

export default async function page() {
  const getClient = async (): Promise<unknown | null> => {
    const supabase = createClient();

    const { data, error } = await supabase.auth.getUser();
    if (error) {
      console.error('Error fetching user:', error);
      redirect('http://localhost:3000/login');
    }
    const user = (await data.user.user_metadata) || null;
    return user;
  };

  const user = await getClient();

  return (
    <div className="flex justify-center items-center h-screen">
      <CardUser user={user} />
    </div>
  );
}
