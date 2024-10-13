import { MessageFlowProps } from '@/interfaces/business/MessageFlowProps';

export const MessageFlow: React.FC<MessageFlowProps> = ({ business }) => {
  return (
    <div className="bg-gray-100 border border-gray-300 rounded-t-lg p-4 shadow-md my-2 max-w-xs md:max-w-md mx-auto">
      {business.descripcion}
    </div>
  );
};
