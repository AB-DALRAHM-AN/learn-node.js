import express from "express";
import { productFakeData } from "./utils/fakeData";
import { ProductService } from "./services/productService";
import ProductController from "./controllers/productController";

const app = express();

app.use(express.json());

const products = productFakeData();

const productService = new ProductService(products);
const productController = new ProductController(productService);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api/products", (req, res) =>
  res.send(productController.getProducts(req))
);

app.get("/api/products/:id", (req, res) => {
  res.send(productController.getProductById(req, res))
});

app.post("/api/products", (req, res) => {
  res.send(productController.addProduct(req, res))
});

// Update a product
app.patch("/api/products/:id", (req, res) => {
  res.send(productController.updateProduct(req, res))
});

app.delete("/api/products/:id", (req, res) => {
  res.send(productController.deleteProduct(req, res))
});
const PORT = 5000;

app.listen(PORT, () => {
  console.log("Server is running on port 5000");
});
