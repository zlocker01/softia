import { Button } from '@/components/ui/button';
import Link from 'next/link';

const page = () => {
  return (
    <div className=" text-center">
      <Button>
        <Link href={'http://localhost:3000/chatbot/editar'}>
          Editar Chatbot
        </Link>
      </Button>
    </div>
  );
};
export default page;
