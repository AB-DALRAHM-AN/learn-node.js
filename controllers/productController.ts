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

  addProduct(req: Request, res: Response): void {
    const newProduct = req.body;
    this.ProductService.addProduct(newProduct);

    if (!newProduct.name || !newProduct.price) {
      res.status(400).send("Name and price are required");
    }

    res.status(201).send({
      id: this.ProductService.getAll().length + 1,
      name: newProduct.name,
      price: newProduct.price,
    });
  }

  updateProduct(req: Request, res: Response): void {
    const productId = +req.params.id;
    const product = this.ProductService.getAll().find(
      (p) => p.id === productId
    );
    if (!product) {
      res.status(404).send("Product not found");
    } else {
      const updatedProduct = req.body;
      this.ProductService.updateProduct(productId, updatedProduct);
      res.status(200).send({
        message: "Product updated successfully",
      });
    }
    if (isNaN(productId)) {
      res.status(400).send("Invalid ID supplied");
    }
  }

  deleteProduct(req: Request, res: Response): void {
    const productId = +req.params.id;

    if (isNaN(productId)) {
      res.status(400).send("Invalid ID supplied");
    }

    const product = this.ProductService.getAll().find(
      (p) => p.id === productId
    );
    if (!product) {
      res.status(404).send("Product not found");
    } else {
      this.ProductService.deleteProduct(productId);
      res.status(200).send({
        message: "Product deleted successfully",
      });
    }
  }
}

export default ProductController;
