import { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  key: number;
};

export const CategoryMenuItem: FC<Props> = ({ children }) => {
  return <li>{children}</li>;
};
