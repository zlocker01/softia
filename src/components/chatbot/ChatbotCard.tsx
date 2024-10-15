interface ChatbotCardProps {
  greetingText: string;
  businessProp: string;
}

export const ChatbotCard: React.FC<ChatbotCardProps> = ({
  greetingText,
  businessProp,
}) => {
  return (
    <div className="ml-1 bg-gray-100 border border-gray-300 rounded-tl-lg rounded-tr-lg rounded-br-lg p-4 shadow-md my-2 max-w-xs md:max-w-md mx-auto">
      {greetingText} <span className="text-purple-500">{businessProp}</span>
    </div>
  );
};
