'use server';
import { Title } from '@/components/navegation/Title';
import { FormEditService } from '@/components/services/FormEditService';
import { getService } from '@/data/services/getService';

const page = async ({ params }: { params: { id: string } }) => {
  const service = await getService(params.id);
  if (!service || service === null) {
    return null;
  }

  return (
    <div className="flex flex-col justify-center items-center gap-5 md:gap-3 mb-5">
      <Title text={'Editar Servicio'} />
      <div className="mx-5 md:mx-0 md:w-1/2">
        <Title text={'Servicio'} />
        <FormEditService service={service} />
      </div>
    </div>
  );
};

export default page;
