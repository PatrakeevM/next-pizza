import { Container, Filter, Title, TopBar } from "@/components/shared";
import { ProductsGroupList } from "@/components/shared/products-group-list";

export default function Home() {
  return (
    <>
      <Container className="mt-5">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />

      <Container className="mt-10 pb-14">
        <div className="flex gap-[60px]">
          <Filter />
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                title="Пиццы"
                categoryId={1}
                items={[
                  {
                    id: 1,
                    name: "Пицца из половинок",
                    price: 760,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D61BB2BD856BD5DFD71FB7D4210.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 2,
                    name: "Бургер-пицца",
                    price: 550,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D61698827EE9B8DB6D0AEC53410.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 3,
                    name: "Пепперони фреш",
                    price: 650,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 4,
                    name: "Ветчина и сыр",
                    price: 459,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D60FDA22358AC33C6A44EB093A2.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 5,
                    name: "Чоризо фреш",
                    price: 399,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D61706D472F9A5D71EB94149304.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 6,
                    name: "Жюльен",
                    price: 599,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D6175C10773BFE36E56D48DF7E3.avif",
                    items: [{ price: 550 }],
                  },
                ]}
              />
              <ProductsGroupList
                title="Комбо"
                categoryId={2}
                items={[
                  {
                    id: 1,
                    name: "Пицца из половинок",
                    price: 760,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D61BB2BD856BD5DFD71FB7D4210.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 2,
                    name: "Бургер-пицца",
                    price: 550,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D61698827EE9B8DB6D0AEC53410.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 3,
                    name: "Пепперони фреш",
                    price: 650,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D612FC7B7FCA5BE822752BEE1E5.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 4,
                    name: "Ветчина и сыр",
                    price: 459,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D60FDA22358AC33C6A44EB093A2.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 5,
                    name: "Чоризо фреш",
                    price: 399,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D61706D472F9A5D71EB94149304.avif",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 6,
                    name: "Жюльен",
                    price: 599,
                    imageUrl:
                      "https://media.dodostatic.net/image/r:292x292/11EE7D6175C10773BFE36E56D48DF7E3.avif",
                    items: [{ price: 550 }],
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
