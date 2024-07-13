import './assets/style.css';
import { QueryClientWrapper } from '@/providers/QueryClientWrapper';
import { RoutesProvider } from '@/providers/RoutesProvider';

export const App = () => (
  <QueryClientWrapper>
    <RoutesProvider />
  </QueryClientWrapper>
);
