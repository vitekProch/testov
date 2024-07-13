import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { AboutMe } from '@/pages/AboutMe';
import { BusinessConditions } from '@/pages/BusinessConditions';
import { Contact } from '@/pages/Contact';
import { Homepage } from '@/pages/Homepage';
import { PhotographyInfo } from '@/pages/PhotographyInfo';
import { Portfolio } from '@/pages/Portfolio';
import { PriceList } from '@/pages/PriceList';
import { SpecialOffer } from '@/pages/SpecialOffer';
import { ROUTES } from '@/routes';

export const RoutesProvider = () => {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="grow">
          <Routes>
            <Route path={ROUTES.Homepage.path} element={<Homepage route={ROUTES.Homepage} />} />
            <Route path={ROUTES.Portfolio.path} element={<Portfolio route={ROUTES.Portfolio} />} />
            <Route path={ROUTES.SpecialOffer.path} element={<SpecialOffer route={ROUTES.SpecialOffer} />} />
            <Route path={ROUTES.PriceList.path} element={<PriceList route={ROUTES.PriceList} />} />
            <Route path={ROUTES.AboutMe.path} element={<AboutMe route={ROUTES.AboutMe} />} />
            <Route path={ROUTES.Contact.path} element={<Contact route={ROUTES.Contact} />} />
            <Route
              path={ROUTES.BusinessConditions.path}
              element={<BusinessConditions route={ROUTES.BusinessConditions} />}
            />
            <Route path={ROUTES.PhotographyInfo.path} element={<PhotographyInfo route={ROUTES.PhotographyInfo} />} />
            <Route path="*" element={<h1>ERROR PAGE 404 NOT FOUND</h1>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};
