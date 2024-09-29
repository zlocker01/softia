'use client';
import useSWR from 'swr';
import { getUser } from '@/data/users/getUser';

export const CardUser = () => {
  const fetcher = async () => {
    const userProfile = await getUser('3197b376-7d96-480e-a802-f238c9281b2e');
    return userProfile;
  };

  const { data, error } = useSWR('userProfile', fetcher);
  if (error) {
    console.error('error ->', error);
    return;
  }
  if (!data) {
    console.log('No hay perfil');
  }
  console.log('🚀 ~ CardUser ~ data:', data);

  return (
    <div>
      <h3>Nombre: {data?.nombre}</h3>
    </div>
  );
};
