import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(1, { message: 'Prosím vyplňte jméno' }),
  email: z.string().min(1, { message: 'Prosím vyplňte email' }).email({ message: 'Prosím zadejte správný e-mail' }),
  message: z.string().min(1, { message: 'Prosím vyplňte zprávu' }),
});

export type ContactFormFields = z.infer<typeof contactFormSchema>;
