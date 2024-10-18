import { Title } from '@/components/navegation/Title';
import { FormChatbot } from '@/components/chatbot/FormChatbot';
import { FormService } from '@/components/services/FormServices';

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5 md:gap-3">
      <Title text={'Editar Chatbot'} />
      <div className="mx-5 md:mx-0 md:w-1/2">
        <Title text={'Informacion del Negocio'} />
        <FormChatbot />
        <Title text={'Servicios'} />
        <FormService />
      </div>
    </div>
  );
};

export default page;
