import type { FC } from 'react';

import { CategoryMenuItem } from '@/features/PortfolioCategoryMenu/CategoryMenuItem';

export const PortfolioCategoryMenu: FC = () => {
  const categoryData = [
    { categoryName: 'Glamour/Akty' },
    { categoryName: 'Mazlíčci' },
    { categoryName: 'Rodiny' },
    { categoryName: 'Svatby' },
  ];
  return (
    <aside>
      <ul>
        {categoryData.map((category, index) => {
          return <CategoryMenuItem key={index}>{category.categoryName}</CategoryMenuItem>;
        })}
      </ul>
    </aside>
  );
};
