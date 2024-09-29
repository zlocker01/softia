import { getSupaUser } from '@/data/users/getSupaUser';
import { ShowUserProfile } from '@/data/users/showUserProfile';

export default async function page() {
  const user = await getSupaUser();
  if (!user) {
    return;
  }
  const profile = await ShowUserProfile();

  return (
    <div className="flex flex-col justify-center items-center">
      <h2>Nombre: {profile?.nombre}</h2>
    </div>
  );
}
