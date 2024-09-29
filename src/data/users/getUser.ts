import { User } from '@/interfaces/users/User';

export const getUser = async (id: string): Promise<User | null> => {
  const res = await fetch(`http://localhost:3000/api/users/${id}`);
  if (!res.ok) {
    throw new Error('***Failed to get user***');
  }

  const data = (await res.json()) as User;
  return data;
};
