import { cn } from '@/lib/utils';
import React from 'react';
import { Container } from './container';
import { Categories } from './categories';
import { SortPopup } from './sort-popup';

interface ITopBarProps {
  className?: string;
}

export const TopBar: React.FC<ITopBarProps> = ({ className }) => {
  return (
    <div
      className={cn(
        'sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10',
        className,
      )}>
      <Container className="mt-5 flex justify-between">
        <Categories />
        <SortPopup />
      </Container>
    </div>
  );
};
