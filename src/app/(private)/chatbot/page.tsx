import Link from 'next/link';
import { Title } from '@/components/navegation/Title';
import { Button } from '@/components/ui/button';
import { getBusiness } from '@/data/chatbot/getBusiness';
import { MessageFlow } from '@/components/chatbot/MessageFlow';
import { InfoDialog } from '@/components/navegation/InfoDialog';
// import { ChatbotRender } from '@/components/chatbot/ChatbotRender';

export const revalidate = 60;

const page = async () => {
  const business = await getBusiness();

  return (
    <div className="text-center">
      <Title text={'Chatbot'} />
      <InfoDialog description="Personaliza tu chatbot y observa un ejemplo aproximado de la interaccion con tus clientes y el chatbot." />
      {business ? (
        <MessageFlow business={business} />
      ) : (
        <h3 className="my-2">
          Aún no has personalizado tu chatbot, comienza ahora
        </h3>
      )}
      <div className="px-2 md:px-0 my-5">
        <Button>
          <Link href={'http://localhost:3000/chatbot/editar'}>
            Editar Chatbot
          </Link>
        </Button>
      </div>
      {/* <ChatbotRender /> */}
    </div>
  );
};

export default page;
