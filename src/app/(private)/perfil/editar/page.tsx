import { Title } from '@/components/navegation/Title';
import { FormUser } from '@/components/users/FormUser';

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5 md:gap-3">
      <Title text={'Editar Perfil'} />
      <FormUser />
    </div>
  );
};

export default page;
