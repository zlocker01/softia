import { z } from 'zod';

export const idUserSchema = z.string({
  message: '¡¡¡***Ingresa un ID valido***!!!',
});
