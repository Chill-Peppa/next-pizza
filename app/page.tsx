import {
  Container,
  Filters,
  ProductsGroupList,
  Title,
  TopBar,
} from '@/components/shared';

export default function Home() {
  return (
    <>
      <Container className="mt-5">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>

      <TopBar />

      <Container className="pb-14 mt-10">
        <div className="flex gap-[80px]">
          {/* Фильтрация */}
          <div className="w-[250px]">
            <Filters />
          </div>

          {/* Список товаров */}
          <div className="flex-1">
            <ProductsGroupList
              title="Пиццы"
              items={[
                {
                  id: 1,
                  name: 'Чизбургер-пицца',
                  imageUrl:
                    'https://media.dodostatic.net/image/r:292x292/11EE7D6175C10773BFE36E56D48DF7E3.avif',
                  price: 550,
                  items: [{ price: 550 }],
                },
                {
                  id: 2,
                  name: 'Чизбургер-пицца',
                  imageUrl:
                    'https://media.dodostatic.net/image/r:292x292/11EE7D6175C10773BFE36E56D48DF7E3.avif',
                  price: 550,
                  items: [{ price: 550 }],
                },
                {
                  id: 3,
                  name: 'Чизбургер-пицца',
                  imageUrl:
                    'https://media.dodostatic.net/image/r:292x292/11EE7D6175C10773BFE36E56D48DF7E3.avif',
                  price: 550,
                  items: [{ price: 550 }],
                },
                {
                  id: 4,
                  name: 'Чизбургер-пицца',
                  imageUrl:
                    'https://media.dodostatic.net/image/r:292x292/11EE7D6175C10773BFE36E56D48DF7E3.avif',
                  price: 550,
                  items: [{ price: 550 }],
                },
                {
                  id: 5,
                  name: 'Чизбургер-пицца',
                  imageUrl:
                    'https://media.dodostatic.net/image/r:292x292/11EE7D6175C10773BFE36E56D48DF7E3.avif',
                  price: 550,
                  items: [{ price: 550 }],
                },
              ]}
              categoryId={1}
            />
            <ProductsGroupList
              title="Комбо"
              items={[
                {
                  id: 6,
                  name: 'Чизбургер-пицца',
                  imageUrl:
                    'https://media.dodostatic.net/image/r:292x292/11EE7D6175C10773BFE36E56D48DF7E3.avif',
                  price: 550,
                  items: [{ price: 550 }],
                },
                {
                  id: 7,
                  name: 'Чизбургер-пицца',
                  imageUrl:
                    'https://media.dodostatic.net/image/r:292x292/11EE7D6175C10773BFE36E56D48DF7E3.avif',
                  price: 550,
                  items: [{ price: 550 }],
                },
                {
                  id: 8,
                  name: 'Чизбургер-пицца',
                  imageUrl:
                    'https://media.dodostatic.net/image/r:292x292/11EE7D6175C10773BFE36E56D48DF7E3.avif',
                  price: 550,
                  items: [{ price: 550 }],
                },
                {
                  id: 9,
                  name: 'Чизбургер-пицца',
                  imageUrl:
                    'https://media.dodostatic.net/image/r:292x292/11EE7D6175C10773BFE36E56D48DF7E3.avif',
                  price: 550,
                  items: [{ price: 550 }],
                },
                {
                  id: 10,
                  name: 'Чизбургер-пицца',
                  imageUrl:
                    'https://media.dodostatic.net/image/r:292x292/11EE7D6175C10773BFE36E56D48DF7E3.avif',
                  price: 550,
                  items: [{ price: 550 }],
                },
              ]}
              categoryId={2}
            />
          </div>
        </div>
      </Container>
    </>
  );
}
