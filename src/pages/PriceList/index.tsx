import type { FC } from 'react';

import { PriceListMenu } from '@/features/PriceListMenu';
import type { CustomRoute } from '@/routes';

type Props = {
  route: CustomRoute;
};

export const PriceList: FC<Props> = ({ route: { id: pageId, name: pageName } }) => {
  return (
    <div data-page-id={pageId} data-page-name={pageName}>
      <h1 className="text-center">{pageName}</h1>
      <PriceListMenu />
    </div>
  );
};
