import { CardUser } from '@/components/users/CardUser';
import { getUser } from '@/data/users/getUser';

export default async function page() {
  const user = await getUser();

  return (
    <div className="flex justify-center items-center h-screen">
      <CardUser user={user} />
    </div>
  );
}
