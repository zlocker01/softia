'use client';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Input } from '@/components/ui/input';
import { postBusiness } from '@/data/chatbot/postBusiness';
import { businessSchema } from '@/schemas/chatbotSchemas/businessSchema';
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

export const FormChatbot = () => {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof businessSchema>>({
    resolver: zodResolver(businessSchema),
    defaultValues: {
      name: '',
      location: '',
      number: '',
      email: '',
      openingHours: '',
      closingHours: '',
      description: '',
      days: [],
    },
  });

  const router = useRouter();

  async function onSubmit(values: z.infer<typeof businessSchema>) {
    const error = await postBusiness(values);

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
        description: 'Chatbot actualizado.',
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
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Escribe el nombre aquí"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Este es el nombre de tu negocio
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Ubicación</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Escribe la ubicación aquí"
                    {...field}
                  />
                </FormControl>
                <FormDescription>Ubicación de tu negocio</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="number"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Teléfono</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="Escribe el número aquí"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  El número de teléfono de tu negocio
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Correo</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Escribe el correo aquí"
                    {...field}
                  />
                </FormControl>
                <FormDescription>El correo de tu negocio</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="openingHours"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Horario de apertura</FormLabel>
                <FormControl>
                  <Input
                    type="time"
                    placeholder="Escribe el horario aquí"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  El horario de apertura de tu negocio
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="closingHours"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Horario de cierre</FormLabel>
                <FormControl>
                  <Input
                    type="time"
                    placeholder="Escribe el horario aquí"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  El horario de cierre de tu negocio
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="days"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Días Laborales</FormLabel>
                <FormControl>
                  <div className="flex flex-col gap-2">
                    {[
                      'Lunes',
                      'Martes',
                      'Miércoles',
                      'Jueves',
                      'Viernes',
                      'Sábado',
                      'Domingo',
                    ].map((day) => (
                      <label key={day} className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={field.value.includes(day)}
                          onChange={() => {
                            const newDays = field.value.includes(day)
                              ? field.value.filter((d: string) => d !== day) // Si el día ya está seleccionado, lo eliminamos
                              : [...field.value, day]; // Si no está seleccionado, lo agregamos
                            field.onChange(newDays); // Actualizamos el valor de los días
                          }}
                        />
                        {day}
                      </label>
                    ))}
                  </div>
                </FormControl>
                <FormDescription>
                  Marca los días laborales de tu negocio
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
                    placeholder="Escribe la descripción de tu negocio y toda la información necesaria para que el chatbot pueda ayudar a tus clientes con sus dudas..."
                  />
                </FormControl>
                <FormDescription>
                  La descripción de tu negocio con detalles que deben saber tus
                  clientes
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button size={'xs'} type="submit">
            Actualizar Información
          </Button>
        </form>
      </Form>
    </div>
  );
};
