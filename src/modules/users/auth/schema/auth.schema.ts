import { z } from 'zod';

export const AuthSchema = z.object({
  email: z
    .string({ message: 'Campo obrigatório' })
    .email({ message: 'Preencha o campo de e-mail corretamente.' }),
  password: z.string({ message: 'Campo obrigatório' }),
  loginRole: z.string({ message: 'Campo obrigatório' }),
});

export type AuthSchemaType = z.infer<typeof AuthSchema>;
