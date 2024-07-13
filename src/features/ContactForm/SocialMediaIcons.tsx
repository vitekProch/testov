import type { FC } from 'react';
import { Link } from 'react-router-dom';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import Box from '@mui/material/Box';

export const SocialMediaIcons: FC = () => (
  <Box className="flex">
    <Link to="https://www.facebook.com/Fotografieodhanky" target="_blank" rel="noreferrer">
      <FacebookIcon />
    </Link>
    <Link to="https://www.instagram.com/fotografie_od_hanky/" target="_blank">
      <InstagramIcon />
    </Link>
  </Box>
);
