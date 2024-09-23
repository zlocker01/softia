import { SideBar } from '@/components/navegation/SideBar';

const layoutUser = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div>
      <SideBar />
      <main className="">{children}</main>
    </div>
  );
};

export default layoutUser;
