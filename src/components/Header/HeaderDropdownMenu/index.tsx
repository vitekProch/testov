import { FC, useState } from 'react';
import { Link } from 'react-router-dom';

import { ROUTES } from '@/routes';
import { DropDownMenuLink } from '@/components/Header/HeaderDropdownMenu/DropDownMenuLink';

export const HeaderDropdownMenu: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button onClick={toggleDropdown} className="justify-center w-full ">
          Další
        </button>
      </div>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <DropDownMenuLink name={ROUTES.BusinessConditions.name} path={ROUTES.BusinessConditions.path} />
            <DropDownMenuLink name={ROUTES.PhotographyInfo.name} path={ROUTES.PhotographyInfo.path} />
          </div>
        </div>
      )}
    </div>
  );
};
