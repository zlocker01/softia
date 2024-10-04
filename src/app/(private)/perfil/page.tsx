import {
  AvatarIcon,
  EnvelopeClosedIcon,
  PersonIcon,
  RocketIcon,
} from '@radix-ui/react-icons';
import { DarkModeButton } from '@/components/navegation/DarkModeButton';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { InfoDialog } from '@/components/navegation/InfoDialog';
import { NextResponse } from 'next/server';
import { createClient } from '@/utils/supabase/server';

export default async function page() {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  const user = await data.user.user_metadata;

  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="flex flex-col justify-evenly items-center p-5 rounded-lg shadow-md hover:shadow-lg">
        <CardHeader>
          <Avatar className="mb-4 w-24 h-24 shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
            <AvatarImage
              src="https://github.com/shadcn.png"
              alt="imagen de perfil"
              className="rounded-full border-2 border-gray-300"
            />
            <AvatarFallback>
              <AvatarIcon />
            </AvatarFallback>
          </Avatar>
        </CardHeader>
        <CardContent className="flex flex-col gap-3 items-center">
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
          <div className="w-full border-t-2 border-dotted border-gray-200 pt-2 text-center -mb-3">
            <DarkModeButton />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-2">
          <Button>
            <Link href={'http://localhost:3000/perfil/editar'}>
              Editar Perfil
            </Link>
          </Button>
          <InfoDialog description="Cambia tu nombre de usuario, tu plan de suscripcion y metodos de pago en esta sección y modo oscuro."></InfoDialog>
        </CardFooter>
      </Card>
    </div>
  );
}
