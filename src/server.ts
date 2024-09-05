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
  const newProduct = req.body;

  if (!newProduct.name || !newProduct.price) {
    res.status(400).send("Name and price are required");
  }

  products.push({
    id: products.length + 1,
    name: newProduct.name,
    price: newProduct.price,
  });

  res.status(201).send({
    id: products.length + 1,
    name: newProduct.name,
    price: newProduct.price,
  });
});

// Update a product
app.patch("/api/products/:id", (req, res) => {
  const productID = +req.params.id;

  if (isNaN(productID)) {
    res.status(400).send("Invalid ID supplied");
  }

  const product = products.find((p) => p.id === productID);
  if (!product) {
    res.status(404).send("Product not found");
  } else {
    const updatedProduct = req.body;
    products.map((p) => {
      if (p.id === productID) {
        p.name = updatedProduct.name;
      }
    });
    res.status(200).send({
      message: "Product updated successfully",
    });
  }
});

app.delete("/api/products/:id", (req, res) => {
  const productID = +req.params.id;

  if (isNaN(productID)) {
    res.status(400).send("Invalid ID supplied");
  }

  const product = products.find((p) => p.id === productID);
  if (!product) {
    res.status(404).send("Product not found");
  } else {
    products.map((p) => {
      if (p.id === productID) {
        products.splice(products.indexOf(p), 1);
      }
    });
    res.status(200).send({
      message: "Product deleted successfully",
    });
  }
});
const PORT = 5000;

app.listen(PORT, () => {
  console.log("Server is running on port 5000");
});
