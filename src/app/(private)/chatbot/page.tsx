import Link from 'next/link';
import { Title } from '@/components/navegation/Title';
import { Button } from '@/components/ui/button';
import { getBusiness } from '@/data/chatbot/getBusiness';
import { MessageFlow } from '@/components/chatbot/MessageFlow';

export const revalidate = 30;
const page = async () => {
  const business = await getBusiness();
  if (business === null || !business) return null;

  return (
    <div className="text-center">
      <Title text={'Chatbot'} />
      <MessageFlow business={business} />
      <div className="px-2 md:px-0 my-5">
        <Button>
          <Link href={'http://localhost:3000/chatbot/editar'}>
            Editar Chatbot
          </Link>
        </Button>
      </div>
    </div>
  );
};
export default page;
