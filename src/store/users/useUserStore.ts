import { create } from 'zustand';
import { SupaUser } from '@/interfaces/users/SupaUser';

interface UserState {
  user: SupaUser | null;
  setUser: (user: SupaUser | null) => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));
