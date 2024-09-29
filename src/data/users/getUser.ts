import { User } from '@/interfaces/users/User';

export const getUser = async (id: string | undefined): Promise<User | null> => {
  const res = await fetch(`http://localhost:3000/api/users/${id}`);
  if (!res.ok) {
    console.error('Error fetching user');
    return null;
  }

  const data = (await res.json()) as User;
  return data;
};
