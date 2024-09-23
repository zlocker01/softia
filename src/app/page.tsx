import { TopBar } from '@/components/navegation/TopBar';
import { Footer } from '@/components/navegation/Footer';

export default function Home() {
  return (
    <>
      <TopBar />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div>Home Page</div>
      </main>
      <Footer />
    </>
  );
}
