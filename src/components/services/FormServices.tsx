'use client';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Input } from '@/components/ui/input';
import { useRouter } from 'next/navigation';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { servicesSchema } from '@/schemas/servicesSchemas/servicesSchema';
import { postsService } from '@/data/services/postService';

export const FormService = () => {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof servicesSchema>>({
    resolver: zodResolver(servicesSchema),
    defaultValues: {
      title: '',
      description: '',
      duration: '',
      cost: 0,
    },
  });

  const router = useRouter();

  async function onSubmit(values: z.infer<typeof servicesSchema>) {
    const error = await postsService(values);

    if (error) {
      console.error('❌ error!!! -->', error);
      toast({
        title: '¡Error inesperado! 😱',
        description:
          'Ocurrió un error inesperado, por favor intenta nuevamente.',
        variant: 'destructive',
      });
    } else {
      toast({
        title: '¡Listo! 😎',
        description: 'Servicios de Chatbot actualizados.',
        variant: 'success',
      });
      router.replace('/chatbot');
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
                <FormLabel>Titulo</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Escribe el Titulo aquí"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Este es el Titulo del Servicio.
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
                    placeholder="Durante la sesión, nuestro fisioterapeuta utiliza técnicas específicas de presión y fricción para deshacer nudos y contracturas en los músculos, mejorando la circulación y promoviendo la relajación. Este tipo de masaje es especialmente beneficioso para personas con estrés, fatiga o que realizan actividades físicas intensas, ya que ayuda a liberar la tensión acumulada y a restaurar la movilidad"
                  />
                </FormControl>
                <FormDescription>
                  Una descripción de tu servicio
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
                <FormLabel>Duracion</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="1 hora / 45 minutos"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Escribe la duracion en horas y/o minutos
                </FormDescription>
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
                  <Input type="number" placeholder="" {...field} />
                </FormControl>
                <FormDescription>Precio en $ para tu negocio</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button size={'xs'} type="submit">
            Actualizar Servicios
          </Button>
        </form>
      </Form>
    </div>
  );
};
