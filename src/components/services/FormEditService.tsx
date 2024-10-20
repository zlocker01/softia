'use client';
import { z } from 'zod';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { updateService } from '@/data/services/updateService';
import { servicesSchema } from '@/schemas/servicesSchemas/servicesSchema';
import { Service } from '@/interfaces/services/Service';

export const FormEditService = ({ service }: { service: Service }) => {
  const { toast } = useToast();

  const router = useRouter();

  const form = useForm<z.infer<typeof servicesSchema>>({
    resolver: zodResolver(servicesSchema),
    defaultValues: {
      title: service?.titulo,
      description: service?.descripcion,
      duration: service?.duracion,
      cost: service?.precio,
    },
  });

  const serviceId = service.id;

  async function onSubmit(values: z.infer<typeof servicesSchema>) {
    const error = await updateService(values, serviceId);

    if (error) {
      console.error('❌ Error al actualizar:', error);
      toast({
        title: '¡Error inesperado! 🫤',
        description: 'Ocurrió un error al actualizar el servicio.',
        variant: 'destructive',
      });
    } else {
      toast({
        title: '¡Actualizado! 😎',
        description: 'El servicio ha sido actualizado correctamente.',
        variant: 'success',
      });
      router.replace('/servicios');
    }
  }

  return (
    <div className="border rounded-md p-5">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Título</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Escribe el título aquí"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Este es el título del servicio.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Descripción</FormLabel>
                <FormControl>
                  <textarea
                    {...field}
                    className="w-full p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 resize-none dark:text-black"
                    rows={4}
                    placeholder="Descripción del servicio"
                  />
                </FormControl>
                <FormDescription>
                  Una descripción detallada del servicio.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="duration"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Duración</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="1 hora / 45 minutos"
                    {...field}
                  />
                </FormControl>
                <FormDescription>Duración en horas/minutos.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="cost"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Precio</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    placeholder="Escribe el precio"
                    {...field}
                    onChange={(e) => {
                      const value = e.target.value;
                      field.onChange(value === '' ? value : Number(value));
                    }}
                  />
                </FormControl>
                <FormDescription>Precio $</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-center">
            <Button size={'xs'} type="submit">
              Actualizar Servicio
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
