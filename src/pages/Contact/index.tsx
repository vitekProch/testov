import type { FC } from 'react';

import Box from '@mui/material/Box';

import { ContactForm } from '@/features/ContactForm';
import { ContactInfo } from '@/features/ContactForm/ContactInfo';
import type { CustomRoute } from '@/routes';

type Props = {
  route: CustomRoute;
};

export const Contact: FC<Props> = ({ route: { id: pageId, name: pageName } }) => {
  return (
    <Box data-page-id={pageId} data-page-name={pageName} className="bg-amber-400">
      <Box className="flex justify-center">
        <Box className="flex flex-wrap-reverse gap-5">
          <img className="w-[30rem]" src="/images/contactImages/contact-img.jpg" alt="contact" />
          <Box className="flex max-h-[34rem] w-96 flex-col gap-2 bg-amber-50 p-2 text-center">
            <h1>{pageName}</h1>
            <ContactInfo />
            <ContactForm />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
