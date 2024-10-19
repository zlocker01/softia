import Link from 'next/link';
import { Title } from '@/components/navegation/Title';
import { Button } from '@/components/ui/button';
import { InfoDialog } from '@/components/navegation/InfoDialog';
import { getServices } from '@/data/services/getServices';
import { CardServiceList } from '@/components/services/CardServiceList';

export const revalidate = 60;

const page = async () => {
  const services = await getServices();

  return (
    <div className="text-center">
      <Title text={'Servicios'} />
      <div>
        <InfoDialog description="Personaliza tus servicios y observa un ejemplo aproximado de la interaccion con tus clientes y el chatbot." />
      </div>
      {services ? (
        <CardServiceList services={services} />
      ) : (
        <h3 className="my-2">
          Aún no has personalizado tus servicios, comienza ahora
        </h3>
      )}
      <div className="px-2 md:px-0 my-5">
        <Button>
          <Link href={'http://localhost:3000/servicios/crear'}>
            Crear Servicio
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default page;
