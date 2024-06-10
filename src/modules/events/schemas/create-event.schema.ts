import { z } from 'zod';

export const CreateEventSchema = z.object({
  title: z.string({ message: 'Campo obrigatório' }),
  eventTypeId: z.string({ message: 'Campo obrigatório' }),
  about: z.string({ message: 'Campo obrigatório' }),
  local: z.string({ message: 'Campo obrigatório' }),
  status: z.string({ message: 'Campo obrigatório' }),
  startAt: z.string({ message: 'Campo obrigatório' }),
  endAt: z.string({ message: 'Campo obrigatório' }),
});

export type CreateEventSchemaType = z.infer<typeof CreateEventSchema>;
