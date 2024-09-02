import { Product } from "../interfaces";
import { productFakeData } from "../utils/fakeData";
const fakeProducts = productFakeData();

export class ProductService {
  private readonly products: Product[] = fakeProducts;

  getAll() {
    return this.products;
  }
}
