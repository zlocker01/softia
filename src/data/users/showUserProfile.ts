import { useUserStore } from '@/store/users/useUserStore';
import { getUser } from './getUser';
import { postUser } from './postUser';
import { User } from '@/interfaces/users/User';
import { UserPost } from '@/interfaces/users/UserPost';

/**
 * @description Shows the user profile of the current user. If the user does not exist in the database, it creates a new profile.
 * @returns The user profile if it exists, null otherwise.
 */
export const ShowUserProfile = async (): Promise<User | null> => {
  const supaUser = useUserStore.getState().user;

  if (!supaUser) {
    console.error('Error fetching user profile:');
    return null;
  }
  const profile = await getUser(supaUser.id);

  if (!profile) {
    console.log('🎉 User not found, creating a new user profile...');
    const userData: UserPost = {
      nombre: supaUser.name || '',
      email: supaUser.email || '',
      pagado: false,
      id_supa_user: supaUser.id,
    };
    const newProfile: User = await postUser(userData);
    return newProfile;
  }

  return profile;
};