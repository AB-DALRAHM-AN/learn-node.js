import { faker } from "@faker-js/faker";


export const productFakeData = () => {
  return Array.from({ length: 20 }, (_, idx) => ({
    id: idx + 1,
    name: faker.commerce.productName(),
    price: faker.commerce.price({ min: 109, max: 1090}),

  }));
}