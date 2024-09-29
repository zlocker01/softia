import { CardUser } from '@/components/users/CardUser';
import { updateUser } from '@/data/users/updateUser';

export default async function page() {
  const user = await updateUser();

  return (
    <div className="flex justify-center items-center h-screen">
      <CardUser user={user} />
    </div>
  );
}
