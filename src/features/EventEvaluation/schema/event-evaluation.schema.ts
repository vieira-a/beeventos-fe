import { z } from 'zod';

export const EventEvaluationSchema = z.object({
  rating: z.number({ message: 'Campo obrigatório' }),
  comment: z.string({ message: 'Campo obrigatório' }),
  anonymous: z.boolean({ message: 'Campo obrigatório' }),
});

export type EventEvaluationSchemaType = z.infer<typeof EventEvaluationSchema>;
