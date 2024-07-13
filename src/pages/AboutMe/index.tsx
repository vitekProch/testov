import type { FC } from 'react';

import type { CustomRoute } from '@/routes';

type Props = {
  route: CustomRoute;
};

export const AboutMe: FC<Props> = ({ route: { id: pageId, name: pageName } }) => {
  return (
    <div data-page-id={pageId} data-page-name={pageName}>
      <h1>{pageName}</h1>
    </div>
  );
};
