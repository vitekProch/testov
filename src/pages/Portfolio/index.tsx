import type { FC } from 'react';
import { useLocation } from 'react-router-dom';

import { PortfolioCategoryMenu } from '@/features/PortfolioCategoryMenu';
import type { CustomRoute } from '@/routes';
import { getPortfolioCategoryFromUrl } from '@/utils/getPortfolioCategoryFromUrl';

type Props = {
  route: CustomRoute;
};

export const Portfolio: FC<Props> = ({ route: { id: pageId, name: pageName, path } }) => {
  const location = useLocation();
  const portfolioCategory = getPortfolioCategoryFromUrl(location.pathname);
  return (
    <div data-page-id={pageId} data-page-name={pageName}>
      <PortfolioCategoryMenu />
      <h1>
        {location.pathname}, RESULT: {portfolioCategory}
      </h1>
      {portfolioCategory && <h2>TEXTO</h2>}
    </div>
  );
};
