'use client';
import { Title } from '@/components/Title';
import { FormAuth } from '@/components/auth/FormAuth';
import { InfoDialog } from '@/components/InfoDialog';

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5 md:gap-3">
      <Title text={'Iniciar Sesión'} />
      <InfoDialog description="Utilizamos MagicLink para iniciar sesión. MagicLink es una forma moderna y más segura de acceder a tu cuenta sin necesidad de recordar contraseñas. Cada vez que desees iniciar sesión, recibirás un enlace único en tu correo electrónico." />
      <FormAuth />
    </div>
  );
};

export default page;
