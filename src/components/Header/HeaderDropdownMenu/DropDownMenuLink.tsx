import type { FC } from 'react';
import { Link } from 'react-router-dom';

import { CustomRoute } from '@/routes';

export const DropDownMenuLink: FC<Omit<CustomRoute, 'id'>> = ({ path, name }) => {
  return (
    <Link to={path} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
      {name}
    </Link>
  );
};
