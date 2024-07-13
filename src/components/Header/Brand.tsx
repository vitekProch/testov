import type { FC } from 'react';
import { Link } from 'react-router-dom';

export const Brand: FC = () => (
  <Link to="/">
    <strong className="font-serif text-3xl">FOTOGRAFIE OD HANKY</strong>
  </Link>
);
