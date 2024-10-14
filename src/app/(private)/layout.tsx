/* eslint-disable react-hooks/rules-of-hooks */
'use client';
import { SideBar } from '@/components/navegation/SideBar';
import { useUserStore } from '@/store/darkMode/darkMode';
import { useEffect } from 'react';

const layoutUser = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const darkMode = useUserStore((state) => state.darkMode);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <div>
      <SideBar />
      <main className="">{children}</main>
    </div>
  );
};

export default layoutUser;
