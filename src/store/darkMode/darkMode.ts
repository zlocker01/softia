import { create } from 'zustand';

interface UserState {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}

export const useUserStore = create<UserState>((set) => ({
  darkMode: false,
  setDarkMode: (darkMode) => set({ darkMode }),
}));
