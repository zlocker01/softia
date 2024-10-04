'use client';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Input } from '@/components/ui/input';
import { editSchema } from '@/schemas/profileSchemas/editSchema';
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
import { updateUserName } from '@/data/users/updateUserName';
import { DarkModeButton } from '@/components/navegation/DarkModeButton';

export const FormUser = () => {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof editSchema>>({
    resolver: zodResolver(editSchema),
    defaultValues: {
      name: '',
    },
  });

  const router = useRouter();

  async function onSubmit(values: z.infer<typeof editSchema>) {
    const error = await updateUserName(values);

    if (error) {
      console.error('❌ error!!! -->', error);
      return toast({
        title: '¡Error inesperado! 😱',
        description:
          'Ocurrió un error inesperado, por favor intenta nuevamente.',
        variant: 'destructive',
      });
    } else {
      toast({
        title: '¡Listo! 😎',
        description: 'Perfil actualizado.',
        variant: 'success',
      });
      router.replace('/perfil');
      router.refresh();
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
                    placeholder="Escribe tu nombre aquí"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  Este es el nombre que aparecerá en tu perfil
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button size={'xs'} type="submit">
            Actualizar Perfil
          </Button>
        </form>
      </Form>
      <div className="w-full border-t-2 border-dotted border-gray-200 pt-2 text-center my-5">
        <p className="text-gray-500">Mode Oscuro</p>
        <DarkModeButton />
      </div>
    </div>
  );
};
