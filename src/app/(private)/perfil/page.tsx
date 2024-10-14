import { Suspense } from 'react';
import { CardUser } from '@/components/users/CardUser';
import { SkeletonUser } from '@/components/users/SkeletonUser';
import { getUser } from '@/data/users/getUser';

export const revalidate = 60;
export default async function page() {
  const user = await getUser();

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Suspense
        fallback={
          <div>
            <SkeletonUser />
          </div>
        }
      >
        <CardUser user={user} />
      </Suspense>
    </div>
  );
}
