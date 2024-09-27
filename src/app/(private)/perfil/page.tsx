import { getSupaUser } from '@/utils/users/getSupaUser';

export default async function page() {
  const user = await getSupaUser();

  return (
    <div className="flex flex-col justify-center items-center">
      <h2>Bienvenido {user?.user_metadata.name}</h2>
      <p>Correo: {user?.email}</p>
    </div>
  );
}
