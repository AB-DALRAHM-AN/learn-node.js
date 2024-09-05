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

      return filteredProducts;
    }

    return this.getAll();
  }

  getProductsById(paramsId: number) {
    return this.getAll().find((p) => p.id === paramsId);
  }

  addProduct(newProduct: Product) {
    this.getAll().push({
      id: this.getAll().length + 1,
      name: newProduct.name,
      price: newProduct.price,
    });
  }

  updateProduct(productId: number, updatedProduct: Product) {
    this.getAll().map((p) => {
      if (p.id === productId) {
        p.name = updatedProduct.name;
      }
    });
  }

  deleteProduct(productId: number) {
    this.getAll().map((p) => {
      if (p.id === productId) {
        this.getAll().splice(this.getAll().indexOf(p), 1);
      }
    });
  }
}
