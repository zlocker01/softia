import { TopBar } from '@/components/navegation/TopBar';
import { Footer } from '@/components/navegation/Footer';

const layoutUser = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div>
      <TopBar />
      <main className="">{children}</main>
      <Footer />
    </div>
  );
};

export default layoutUser;
