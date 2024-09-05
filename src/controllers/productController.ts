import { request, Request, Response } from "express";
import { ProductService } from "../services/productService";
import { Product } from "../interfaces";

class ProductController {
  constructor(private ProductService: ProductService) {}

  getProducts(req: Request): Product[] {
    const filterQuery = req.query.filter as string;

    if (filterQuery) {
      return this.ProductService.filterQuery(filterQuery);
    }
    return this.ProductService.getAll();
  }

  getProductById(req: Request, res: Response): void {
    const id = +req.params.id;
    const product = this.ProductService.getProductsById(id);

    if (!product) {
      res.status(404).send("Product not found");
    }

    res.send(product);
  }
}

export default ProductController;
