import { Title } from '@/components/navegation/Title';
import { FormService } from '@/components/services/FormServices';

const page = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5 md:gap-3 mb-5">
      <Title text={'Crear Servicio'} />
      <div className="mx-5 md:mx-0 md:w-1/2">
        <Title text={'Servicio'} />
        <FormService />
      </div>
    </div>
  );
};

export default page;
