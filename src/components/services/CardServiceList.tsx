import Link from 'next/link';
import { Button } from '../ui/button';
import { ServiceCardProps } from '@/interfaces/services/ServiceCardProps';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';

export const CardServiceList: React.FC<ServiceCardProps> = ({ services }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {services.map((service) => (
        <Card
          key={service.id}
          className="flex flex-col justify-evenly items-center p-5 rounded-lg shadow-md hover:shadow-lg md:w-5/12 mx-3"
        >
          <CardHeader>
            <CardTitle>{service.titulo}</CardTitle>
            <CardDescription>Duración: {service.duracion}</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            <p>Descripción: {service.descripcion}</p>
            <p className="font-bold text-green-600">
              Precio: ${service.precio}
            </p>
          </CardContent>
          <CardFooter className="flex justify-around gap-5 w-full">
            <Button>
              <Link
                href={`http://localhost:3000/servicios/editar/${service.id}`}
              >
                Editar
              </Link>
            </Button>
            <Button variant="destructive">Eliminar</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};
