import Link from 'next/link';
import { Title } from '@/components/navegation/Title';
import { Button } from '@/components/ui/button';
import { getBusiness } from '@/data/chatbot/getBusiness';
import { MessageFlow } from '@/components/chatbot/MessageFlow';

const page = async () => {
  const business = await getBusiness();
  if (business === null || !business) return null;

  return (
    <div className=" text-center">
      <Title text={'Chatbot'} />
      <MessageFlow business={business} />
      <Button>
        <Link href={'http://localhost:3000/chatbot/editar'}>
          Editar Chatbot
        </Link>
      </Button>
    </div>
  );
};
export default page;
