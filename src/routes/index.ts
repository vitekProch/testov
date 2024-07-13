import { EnumKeys } from '@/types/enum';

export type CustomRoute = {
  id: string;
  name: string;
  path: string;
};

const ROUTE_IDS = {
  Homepage: '/',
  Portfolio: '/portfolio/*',
  SpecialOffer: 'special-offer',
  PriceList: 'price-list',
  AboutMe: 'about-me',
  Contact: 'contact',
  BusinessConditions: 'business-conditions',
  PhotographyInfo: 'photography-info',
} as const;

type RouteId = EnumKeys<typeof ROUTE_IDS>;

export const ROUTES: Record<RouteId, CustomRoute> = {
  Homepage: { id: '1', name: 'Domů', path: ROUTE_IDS.Homepage },
  Portfolio: { id: '2', name: 'Portfolio', path: ROUTE_IDS.Portfolio },
  SpecialOffer: { id: '3', name: 'Novinky', path: ROUTE_IDS.SpecialOffer },
  PriceList: { id: '4', name: 'Ceník', path: ROUTE_IDS.PriceList },
  AboutMe: { id: '5', name: 'O mně', path: ROUTE_IDS.AboutMe },
  Contact: { id: '6', name: 'Kontakt', path: ROUTE_IDS.Contact },
  BusinessConditions: { id: '7', name: 'Obchodní podmínky', path: ROUTE_IDS.BusinessConditions },
  PhotographyInfo: { id: '8', name: 'Informace o focení', path: ROUTE_IDS.PhotographyInfo },
};
