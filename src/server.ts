import express from "express";
import { productFakeData } from "./utils/fakeData";

const app = express();

const products = productFakeData();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api/products", (req, res) => {
  const filteredQuery = req.query.filter as string;
  console.log(filteredQuery);

  if (filteredQuery) {
    const filterQuery = filteredQuery.split(",");

    let filteredProducts = [];

    filteredProducts = products.map((product) => {
      const filteredProduct: any = {};
      filterQuery.forEach((filter) => {
        if (product.hasOwnProperty(filter)) {
          filteredProduct[filter] = product[filter as keyof typeof product];
        }

      });
      return {id: product.id, ...filteredProduct};
    });

    res.send(filteredProducts);
  }

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
