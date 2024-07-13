import { type FC, useState } from 'react';

import { Accordion, AccordionDetails, AccordionSummary, Box } from '@mui/material';

import { PlusIcon } from '@/components/PlusIcon';
import { PriceListContent } from '@/features/PriceListMenu/PriceListContent';

export const PriceListMenu: FC = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(!open);

  return (
    <Box className="flex flex-col items-center justify-center px-5">
      <Accordion component="article" className="w-full max-w-[70rem]">
        <AccordionSummary
          onClick={handleClick}
          expandIcon={<PlusIcon isOpen={open} />}
          aria-controls="panel1-content"
          className="rounded-t-xl bg-amber-400"
        >
          Balíček 1
        </AccordionSummary>
        <AccordionDetails>
          <PriceListContent />
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};
