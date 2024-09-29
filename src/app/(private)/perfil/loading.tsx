import {
  PersonIcon,
  EnvelopeClosedIcon,
  RocketIcon,
} from '@radix-ui/react-icons';
import { Avatar, AvatarFallback } from '@radix-ui/react-avatar';
import { Card } from '@/components/ui/card';
import { DarkModeButton } from '@/components/navegation/DarkModeButton';
import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
  return (
    <div>
      <Card className="flex flex-col justify-evenly items-center h-2/4 p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
        <Avatar className="mb-4 w-24 h-24">
          <AvatarFallback>
            <Skeleton className="rounded-full border-2 border-gray-500 w-24 h-24" />
          </AvatarFallback>
        </Avatar>
        <div className="flex gap-2 flex-row items-center">
          <PersonIcon className="text-gray-500" />
          <Skeleton className="h-4 w-full" />
        </div>
        <div className="flex gap-2 flex-row items-center">
          <EnvelopeClosedIcon className="text-gray-500" />
          <Skeleton className="h-4 w-full" />
        </div>
        <div className="flex gap-2 flex-row items-center">
          <RocketIcon className="text-gray-500" />
          <Skeleton className="h-4 w-full" />
        </div>
        <div className="w-full border-t-2 border-dotted border-gray-200 p-2 text-center">
          <h3>Modo:</h3>
          <DarkModeButton />
        </div>
      </Card>
    </div>
  );
}
