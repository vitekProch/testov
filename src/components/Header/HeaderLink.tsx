import type { FC } from 'react';
import { Link } from 'react-router-dom';

import { CustomRoute } from '@/routes';

export const HeaderLink: FC<Omit<CustomRoute, 'id'>> = ({ path, name }) => {
  return (
    <li>
      <Link to={path}>{name}</Link>
    </li>
  );
};
