import { z } from 'zod';

export const servicesSchema = z.object({
  title: z.string().min(1, { message: 'El título es requerido' }),
  description: z.string().min(1, { message: 'La descripción es requerida' }),
  duration: z.string().min(1, { message: 'La duración es requerida' }),
  cost: z.number().min(0, { message: 'El precio debe ser mayor o igual a 0' }),
});
