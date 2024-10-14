import { create } from 'zustand';

interface UserState {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}

const getInitialDarkMode = (): boolean => {
  if (typeof window !== 'undefined') {
    const storedMode = localStorage.getItem('darkMode');
    return storedMode === 'true';
  }
  return false;
};

export const useUserStore = create<UserState>((set) => ({
  darkMode: getInitialDarkMode(),
  setDarkMode: (darkMode) => {
    set({ darkMode });
    localStorage.setItem('darkMode', darkMode.toString());
  },
}));
