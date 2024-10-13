import Link from 'next/link';
import { Title } from '@/components/navegation/Title';
import { Button } from '@/components/ui/button';
import { getBusiness } from '@/data/chatbot/getBusiness';

const page = async () => {
  const business = await getBusiness();
  console.log('🚀 ~ page ~ business:', business);

  return (
    <div className=" text-center">
      <Title text={'Chatbot'} />
      <Button>
        <Link href={'http://localhost:3000/chatbot/editar'}>
          Editar Chatbot
        </Link>
      </Button>
    </div>
  );
};
export default page;
