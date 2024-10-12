import { z } from 'zod';

export const businessSchema = z.object({
  name: z.string().min(1, { message: 'El nombre es requerido' }),
  location: z.string().min(1, { message: 'La ubicación es requerida' }),
  number: z.string().min(1, { message: 'El número es requerido' }),
  email: z
    .string()
    .trim()
    .email({ message: 'El correo debe ser válido' })
    .min(1, { message: 'El correo es requerido' }),
  openingHours: z.string().regex(/^([0-1]\d|2[0-3]):([0-5]\d)$/, {
    message: 'El horario de apertura debe estar en formato HH:mm',
  }),
  closingHours: z.string().regex(/^([0-1]\d|2[0-3]):([0-5]\d)$/, {
    message: 'El horario de cierre debe estar en formato HH:mm',
  }),
  days: z.array(z.string()).nonempty('Debes seleccionar al menos un día'),
  description: z.string().min(1, { message: 'La descripción es requerida' }),
});
