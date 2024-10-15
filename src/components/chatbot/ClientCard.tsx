interface ClientCardProps {
  text: string;
}

export const ClientCard = ({ text }: ClientCardProps) => {
  return (
    <div className="mr-1 bg-gray-200 border border-gray-300 rounded-tl-lg rounded-tr-lg rounded-bl-lg p-4 shadow-md my-2 max-w-xs md:max-w-md mx-auto">
      {text}
    </div>
  );
};
