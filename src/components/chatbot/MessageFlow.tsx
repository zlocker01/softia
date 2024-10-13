import { MessageFlowProps } from '@/interfaces/business/MessageFlowProps';

export const MessageFlow: React.FC<MessageFlowProps> = ({ business }) => {
  return (
    <div className="flex flex-col justify-between md:w-1/2 m-auto px-2 md:px-0">
      <div className="ml-1 bg-gray-100 border border-gray-300 rounded-tl-lg rounded-tr-lg rounded-br-lg p-4 shadow-md my-2 max-w-xs md:max-w-md mx-auto">
        Hola, ¡bienvenido a{' '}
        <span className="text-purple-500">{business.nombre_negocio}</span>
      </div>
      <div className="mr-1 bg-gray-200 border border-gray-300 rounded-tl-lg rounded-tr-lg rounded-bl-lg p-4 shadow-md my-2 max-w-xs md:max-w-md mx-auto">
        ¿Dónde se encuentran?
      </div>
      <div className="ml-1 bg-gray-100 border border-gray-300 rounded-tl-lg rounded-tr-lg rounded-br-lg p-4 shadow-md my-2 max-w-xs md:max-w-md mx-auto">
        Estamos ubicados en{' '}
        <span className="text-purple-500">{business.ubicacion}</span>.
      </div>
      <div className="mr-1 bg-gray-200 border border-gray-300 rounded-tl-lg rounded-tr-lg rounded-bl-lg p-4 shadow-md my-2 max-w-xs md:max-w-md mx-auto">
        ¿Tienen algún correo?
      </div>
      <div className="ml-1 bg-gray-100 border border-gray-300 rounded-tl-lg rounded-tr-lg rounded-br-lg p-4 shadow-md my-2 max-w-xs md:max-w-md mx-auto">
        ¡Claro! es:{' '}
        <span className="text-purple-500">{business.email_contacto}</span>.
      </div>
      <div className="mr-1 bg-gray-200 border border-gray-300 rounded-tl-lg rounded-tr-lg rounded-bl-lg p-4 shadow-md my-2 max-w-xs md:max-w-md mx-auto">
        ¿Qué tipo de negocio son ustedes?
      </div>
      <div className="ml-1 bg-gray-100 border border-gray-300 rounded-tl-lg rounded-tr-lg rounded-br-lg p-4 shadow-md my-2 max-w-xs md:max-w-md mx-auto">
        Te cuento un poco de nosotros.{' '}
        <span className="text-purple-500">{business.descripcion}!</span>.
      </div>
      <div className="mr-1 bg-gray-200 border border-gray-300 rounded-tl-lg rounded-tr-lg rounded-bl-lg p-4 shadow-md my-2 max-w-xs md:max-w-md mx-auto">
        ¿Cúal es el horario de atención?
      </div>
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
