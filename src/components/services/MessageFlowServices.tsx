'use client';
import { MessageFlowServicesProps } from '@/interfaces/services/MessageFlowServicesProps';
import { ChatbotCard } from '../chatbot/ChatbotCard';
import { ClientCard } from '../chatbot/ClientCard';

export const MessageFlowServices: React.FC<MessageFlowServicesProps> = ({
  service,
}) => {
  return (
    <div className="flex flex-col justify-between md:w-1/2 m-auto px-2 md:px-0 dark:text-black">
      <ChatbotCard greetingText="" businessProp={service.titulo} />
      <ClientCard text={'¿En qué consiste ese servicio?'} />
      <ChatbotCard greetingText="" businessProp={service.descripcion} />
      <ClientCard text={'¿Cúanto tiempo dura?'} />
      <ChatbotCard greetingText="" businessProp={service.duracion} />
      <ClientCard text={'¿Cúal es el precio?'} />
      <ChatbotCard
        greetingText="Tiene un costo de $"
        businessProp={service.precio.toString()}
      />
    </div>
  );
};
