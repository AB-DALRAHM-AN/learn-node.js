import { Product } from "../interfaces";

export class ProductService {
  constructor(private products: Product[]) {
    this.products = products;
  }

  getAll() {
    return this.products;
  }
}