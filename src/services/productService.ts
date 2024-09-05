import { Request, Response } from "express";
import { Product } from "../interfaces";

export class ProductService {
  constructor(private products: Product[]) {
    this.products = products;
  }

  getAll() {
    return this.products;
  }

  filterQuery(filterQuery?: string) {

    if (filterQuery) {
      const filteredQuery = filterQuery.split(",");

      let filteredProducts = [];

      filteredProducts = this.getAll().map((product) => {
        const filteredProduct: any = {};
        filteredQuery.forEach((filter) => {
          if (product.hasOwnProperty(filter)) {
            filteredProduct[filter] = product[filter as keyof typeof product];
          }
        });
        return { id: product.id, ...filteredProduct };
      });

      return filteredProducts
    }

    return this.getAll()
  }
}
