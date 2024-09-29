'use client';
import {
  AvatarIcon,
  EnvelopeClosedIcon,
  PersonIcon,
  RocketIcon,
} from '@radix-ui/react-icons';
import { DarkModeButton } from '../navegation/DarkModeButton';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Card } from '../ui/card';

export const CardUser = ({ user }: any) => {
  return (
    <Card className="flex flex-col justify-evenly items-center h-2/4 p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
      <Avatar className="mb-4">
        <AvatarImage
          src="https://github.com/shadcn.png"
          alt="imagen de perfil"
          className="rounded-full border-2 border-gray-300"
        />
        <AvatarFallback>
          <AvatarIcon />
        </AvatarFallback>
      </Avatar>
      <div className="flex gap-2 flex-row items-center">
        <PersonIcon className="text-blue-500" />
        <h3>{user?.name}</h3>
      </div>
      <div className="flex gap-2 flex-row items-center">
        <EnvelopeClosedIcon className="text-green-500" />
        <h3>{user?.email}</h3>
      </div>
      <div className="flex gap-2 flex-row items-center">
        <RocketIcon className="text-yellow-500" />
        <h3>Plan: {user?.plan}</h3>
      </div>
      <h3>Modo:</h3>
      <DarkModeButton />
    </Card>
  );
};
