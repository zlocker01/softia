import { UserPost } from '@/interfaces/users/UserPost';

export const postUser = async (user: UserPost) => {
  const response = await fetch('http://localhost:3000/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });

  if (!response.ok) {
    throw new Error('***Failed to post user***');
  }

  const data = await response.json();
  return data;
};