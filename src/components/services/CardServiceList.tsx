'use client';
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
          className="flex flex-col justify-between items-center p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200 md:w-5/12 mx-3 my-4 bg-none"
        >
          <CardHeader className="text-center mb-4">
            <CardTitle className="text-2xl font-bold">
              {service.titulo}
            </CardTitle>
            <CardDescription>Duración: {service.duracion}</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <p>{service.descripcion}</p>
            <p className="font-bold text-green-600 text-lg">
              Precio: ${service.precio}
            </p>
          </CardContent>
          <CardFooter className="flex justify-center items-center w-full mt-4 gap-2">
            <Button>
              <Link
                className="w-full"
                href={`http://localhost:3000/servicios/editar/${service.id}`}
              >
                Ver detalles
              </Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};
