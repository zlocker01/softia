import { z } from 'zod';

export const editSchema = z.object({
  name: z.string().min(1, { message: 'El nombre es requerido' }),
});
