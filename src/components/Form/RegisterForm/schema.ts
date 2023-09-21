import { z } from 'zod';

export const registerSchema = z
  .object({
    name: z.string().trim().nonempty('O nome é obrigatório'),
    email: z
      .string()
      .nonempty('O e-mail é obrigatório')
      .email('Forneça um e-mail válido'),
    password: z
      .string()
      .min(7, 'A senha deve conter no mínimo 7 caracteres')
      .regex(
        /(?=.*?[a-z])/,
        'É necessário pelo menos uma letra maiúscula e minúscula'
      )
      .regex(
        /(?=.*?[A-Z])/,
        'É necessário pelo menos uma letra maiúscula e minúscula'
      )
      .regex(/(?=.*?[0-9])/, 'É necessário pelo menos um número')
      .regex(
        /(?=.*?[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~])/,
        'É necessário pelo menos um caractere especial'
      ),
    confirm: z.string().nonempty('Confirmação de senha é obrigatória'),
  })
  .refine(({ password, confirm }) => password === confirm, {
    message: 'As senhas precisam corresponder',
    path: ['confirm'],
  });

export type TRegisterFormValues = z.infer<typeof registerSchema>;
