import express from "express";
import { productFakeData } from "./utils/fakeData";

const app = express();

const products = productFakeData();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api/products", (req, res) => {
  res.send(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p.id === +req.params.id);
  if (!product) {
    res.status(404).send("Product not found");
  }
  res.send(product);
});
const PORT = 5000;

app.listen(PORT, () => {
  console.log("Server is running on port 5000");
});
