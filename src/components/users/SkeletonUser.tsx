import {
  AvatarIcon,
  PersonIcon,
  EnvelopeClosedIcon,
  RocketIcon,
} from '@radix-ui/react-icons';
import { Avatar, AvatarFallback } from '@radix-ui/react-avatar';
import { Card, CardHeader, CardContent, CardFooter } from '../ui/card';
import { Skeleton } from '@/components/ui/skeleton';

export const SkeletonUser = () => {
  return (
    <Card className="flex flex-col justify-evenly items-center p-5 rounded-lg shadow-md hover:shadow-lg">
      <CardHeader>
        <Avatar className="mb-4 w-24 h-24 shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
          <AvatarFallback>
            <Skeleton className="h-28 w-28 rounded-full" />
          </AvatarFallback>
        </Avatar>
      </CardHeader>
      <CardContent className="flex flex-col gap-3 items-center">
        <div className="flex gap-2 flex-row items-center">
          <PersonIcon className="text-gray-500" />
          <Skeleton className="h-8 w-32" />
        </div>
        <div className="flex gap-2 flex-row items-center">
          <EnvelopeClosedIcon className="text-gray-500" />
          <Skeleton className="h-8 w-40" />
        </div>
        <div className="flex gap-2 flex-row items-center">
          <RocketIcon className="text-gray-500" />
          <Skeleton className="h-8 w-20" />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-2 justify-center">
        <Skeleton className="h-10 w-28" />
      </CardFooter>
    </Card>
  );
};
