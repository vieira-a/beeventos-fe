import { z } from 'zod';

export const SignupSchema = z.object({
  firstname: z.string({ message: 'Campo obrigatório' }),
  lastname: z.string({ message: 'Campo obrigatório' }),
  email: z
    .string({ message: 'Campo obrigatório' })
    .email({ message: 'Preencha o campo de e-mail corretamente.' }),
  password: z.string({ message: 'Campo obrigatório' }),
  passwordConfirmation: z.string({ message: 'Campo obrigatório' }),
});

export type SignupSchemaType = z.infer<typeof SignupSchema>;
