import type { FC } from 'react';

import { Brand } from '@/components/Header/Brand';
import { HeaderDropdownMenu } from '@/components/Header/HeaderDropdownMenu';
import { HeaderLink } from '@/components/Header/HeaderLink';
import { ROUTES } from '@/routes';

export const Header: FC = () => {
  const dezo = true;
  return (
    <header className="sticky inset-0 bg-amber-400">
      <nav className="flex items-center justify-between px-3">
        <Brand />
        <ul className="flex gap-5">
          <HeaderLink key={ROUTES.Homepage.id} path={ROUTES.Homepage.path} name={ROUTES.Homepage.name} />
          <HeaderLink key={ROUTES.Portfolio.id} path={ROUTES.Portfolio.path} name={ROUTES.Portfolio.name} />
          <HeaderLink key={ROUTES.SpecialOffer.id} path={ROUTES.SpecialOffer.path} name={ROUTES.SpecialOffer.name} />
          <HeaderLink key={ROUTES.PriceList.id} path={ROUTES.PriceList.path} name={ROUTES.PriceList.name} />
          <HeaderLink key={ROUTES.AboutMe.id} path={ROUTES.AboutMe.path} name={ROUTES.AboutMe.name} />
          <HeaderLink key={ROUTES.Contact.id} path={ROUTES.Contact.path} name={ROUTES.Contact.name} />
          {dezo ? (
            <HeaderDropdownMenu />
          ) : (
            <>
              <HeaderLink
                key={ROUTES.BusinessConditions.id}
                path={ROUTES.BusinessConditions.path}
                name={ROUTES.BusinessConditions.name}
              />
              <HeaderLink
                key={ROUTES.PhotographyInfo.id}
                path={ROUTES.PhotographyInfo.path}
                name={ROUTES.PhotographyInfo.name}
              />
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};
