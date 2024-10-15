import Link from 'next/link';
import { Title } from '@/components/navegation/Title';
import { Button } from '@/components/ui/button';
import { getBusiness } from '@/data/chatbot/getBusiness';
import { MessageFlow } from '@/components/chatbot/MessageFlow';
import { InfoDialog } from '@/components/navegation/InfoDialog';

export const revalidate = 30;
const page = async () => {
  const business = await getBusiness();
  if (business === null || !business) {
    return (
      <div className="text-center">
        <Title text={'Chatbot'} />
        <InfoDialog description="Personaliza tu chatbot y observa un ejemplo aproximado de la interaccion con tus clientes y el chatbot." />
        <div className="px-2 md:px-0 my-5">
          <Button>
            <Link href={'http://localhost:3000/chatbot/editar'}>
              Editar Chatbot
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="text-center">
      <Title text={'Chatbot'} />
      <InfoDialog description="Personaliza tu chatbot y observa un ejemplo aproximado de la interaccion con tus clientes y el chatbot." />
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
