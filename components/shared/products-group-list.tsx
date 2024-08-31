'use client';

import React, { useRef, useEffect } from 'react';
import { Title } from '@/components/shared';
import { useIntersection } from 'react-use';
import { ProductCard } from '@/components/shared';
import { cn } from '@/lib/utils';

interface Props {
  title: string;
  items: any[];
  categoryId: number;
  className?: string;
  listClassName?: string;
}

export const ProductsGroupList: React.FC<Props> = ({
  title,
  items,
  className,
  categoryId,
  listClassName,
}) => {
  const intersectionRef = useRef(null);
  const intersection = useIntersection(intersectionRef, { threshold: 0.4 }); //thershold - при каком проценте видимости сработает функция коллбек

  useEffect(() => {
    if (intersection?.isIntersecting) {
      console.log(title, categoryId);
    }
  }, [title, categoryId, intersection?.isIntersecting]);

  return (
    <div className={className} id={title} ref={intersectionRef}>
      <Title text={title} size="lg" className="font-extrabold mb-5" />
      <div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
        {items.map((item, i) => (
          <ProductCard
            key={item.id}
            name={item.name}
            imageUrl={item.imageUrl}
            price={item.items[0].price}
            id={item.id}
          />
        ))}
      </div>
    </div>
  );
};
