import { MessageFlowProps } from '@/interfaces/business/MessageFlowProps';
import { ChatbotCard } from './ChatbotCard';
import { ClientCard } from './ClientCard';

export const MessageFlow: React.FC<MessageFlowProps> = ({ business }) => {
  return (
    <div className="flex flex-col justify-between md:w-1/2 m-auto px-2 md:px-0 dark:text-black">
      <ChatbotCard
        greetingText="Hola, bienvenido a "
        businessProp={business.nombre_negocio}
      />
      <ClientCard text={'¿Dónde estan ubicados?'} />
      <ChatbotCard
        greetingText="Estamos ubicados en"
        businessProp={business.ubicacion}
      />
      <ClientCard text={'¿Tienen algun correo?'} />
      <ChatbotCard
        greetingText="Claro, es"
        businessProp={business.email_contacto}
      />
      <ClientCard
        text={'¿Me puede dar mas información acerda de su negocio?'}
      />
      <ChatbotCard
        greetingText="Te cuento un poco de nosotros"
        businessProp={business.descripcion}
      />
      <ClientCard text={'¿Cúal es el horario de atención?'} />
      <div className="ml-1 bg-gray-100 border border-gray-300 rounded-tl-lg rounded-tr-lg rounded-br-lg p-4 shadow-md my-2 max-w-xs md:max-w-md mx-auto">
        Los dias{' '}
        <span className="text-purple-500">
          {business.dias_laborales.replace(/[[\]"']/g, ' ')}
        </span>
        atendemos de{' '}
        <span className="text-purple-500">{business.horario_apertura}</span> a{' '}
        <span className="text-purple-500">{business.horario_cierre}</span>.
      </div>
    </div>
  );
};
