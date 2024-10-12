import { create } from 'zustand';
import { UserId } from '@/interfaces/users/UserId';

interface UserState {
  userId: UserId | null;
  setUserId: (userId: UserId | null) => void;
}

export const useUserStore = create<UserState>((set) => ({
  userId: null,
  setUserId: (userId) => set({ userId }),
}));
