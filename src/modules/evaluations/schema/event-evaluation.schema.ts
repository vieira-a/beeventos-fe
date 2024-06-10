import { z } from 'zod';

export const EventEvaluationSchema = z.object({
  rating: z.number({ message: 'Campo obrigatório' }),
  comment: z.string().optional(),
  anonymous: z.boolean().optional(),
});

export type EventEvaluationSchemaType = z.infer<typeof EventEvaluationSchema>;
