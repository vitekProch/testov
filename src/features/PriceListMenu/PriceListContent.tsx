import type { FC } from 'react';

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

function createData(name: string, amount: number, price: number) {
  return { name, amount, price };
}

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('cs-CZ', {
    style: 'currency',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
    currency: 'CZK',
  }).format(price);
};

const rows = [
  createData('Malý balíček', 25, 1800),
  createData('Klasický balíček', 10, 2500),
  createData('Střední balíček', 15, 3200),
  createData('Velký balíček', 20, 3800),
  createData('Maxi balíček', 30, 4500),
];

export const PriceListContent: FC = () => (
  <TableContainer>
    <Table aria-label="simple table">
      <TableHead>
        <TableRow className="flex">
          <TableCell className="flex-1">Název balíčku</TableCell>
          <TableCell className="flex-1 text-center">Počet fotek</TableCell>
          <TableCell className="flex-1 text-right">Cena</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.name} className="flex">
            <TableCell className="flex-1">{row.name}</TableCell>
            <TableCell className="flex-1 text-center">{row.amount} Ks</TableCell>
            <TableCell className="flex-1 text-right">{formatPrice(row.price)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);
