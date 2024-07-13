import type { FC } from 'react';
import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';

export const ContactInfo: FC = () => (
  <Box className="w-full">
    <p>
      <strong>Rokycany - Nové Město</strong>
    </p>
    <Link to="mailto:fotografieodhanky@seznam.cz">
      <strong>fotografieodhanky@seznam.cz</strong>
    </Link>
    <p>
      IČO:<strong>17590850</strong>
    </p>
  </Box>
);
