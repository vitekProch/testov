import type { FC } from 'react';
import { type SubmitHandler, useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import Box from '@mui/material/Box';

import { SocialMediaIcons } from '@/features/ContactForm/SocialMediaIcons';
import { type ContactFormFields, contactFormSchema } from '@/features/ContactForm/types';

export const ContactForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormFields>({
    resolver: zodResolver(contactFormSchema),
  });
  const onSubmit: SubmitHandler<ContactFormFields> = (data) => {
    console.log(data);
  };

  return (
    <form className="flex w-full flex-col gap-2 text-start" onSubmit={handleSubmit(onSubmit)}>
      <input
        className="border-[0.01rem] border-solid border-black p-1"
        {...register('name')}
        type="text"
        placeholder="Vaše jméno"
      />
      {errors.name && <div>{errors.name.message}</div>}
      <input
        className="border-[0.01rem] border-solid border-black p-1"
        {...register('email')}
        type="text"
        placeholder="Váš email"
      />
      {errors.email && <div>{errors.email.message}</div>}
      <textarea
        className="border-[0.01rem] border-solid border-black p-1"
        {...register('message')}
        placeholder="Vaše zpráva"
        rows={8}
      />

      {errors.message && <div>{errors.message.message}</div>}
      <Box className="flex justify-between">
        <SocialMediaIcons />
        <button type="submit">Odeslat</button>
      </Box>
    </form>
  );
};
