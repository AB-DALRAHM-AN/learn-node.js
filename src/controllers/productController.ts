import { ProductService } from "../services/productService";

class ProductController {
  constructor(private ProductService: ProductService) {}

  getProducts() {
    return this.ProductService.getAll();
  }
}

export default ProductController;
