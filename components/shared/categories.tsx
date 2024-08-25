import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';

interface ICategoriesProps {
  className?: string;
}

const cats = [
  'Пиццы',
  'Комбо',
  'Закуски',
  'Коктейли',
  'Кофе',
  'Напитки',
  'Десерты',
  'Десерты',
];
const activeIndex = 0;

export const Categories: React.FC<ICategoriesProps> = ({ className }) => {
  return (
    <div
      className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
      {cats.map((category, i) => (
        <Link
          key={category}
          className={cn(
            'flex items-center font-bold h-11 rounded-2xl px-5',
            activeIndex === i &&
              'bg-white shadow-md shadow-gray-200 text-primary',
          )}
          href="">
          {category}
        </Link>
      ))}
    </div>
  );
};
