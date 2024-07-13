import type { FC } from 'react';

import { IconButton } from '@mui/material';

type Props = { isOpen: boolean };

export const PlusIcon: FC<Props> = ({ isOpen }) => (
  <IconButton className="relative size-8 rounded-[50%] border-2 border-solid border-black">
    <span className="absolute h-0.5 w-5 bg-black"></span>
    <span className={`absolute h-0.5 w-5 ${isOpen ? '' : 'rotate-90'} bg-black`}></span>
  </IconButton>
);
