import express, { NextFunction, Request, Response } from "express";
import { productFakeData } from "./utils/fakeData";
import { ProductService } from "./services/productService";
import ProductController from "./controllers/productController";
import path from "path";
import ErrorMiddleware from "./middlewares/Error";
import dotenv from "dotenv";
import helmet from "helmet";
import NotFoundMiddleware from "./middlewares/NotFound";

const app = express();
app.use(express.json());

app.set("view engine", "pug");

app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("index");
});

dotenv.config();

app.use(
  helmet({
    xFrameOptions: {
      action: "deny",
    },
  })
);

const products = productFakeData();

const productService = new ProductService(products);
const productController = new ProductController(productService);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api/products", (req, res) => {
  throw new Error("Not Implemented");
  res.send(productController.getProducts(req));
});

app.get("/api/products/:id", (req, res) => {
  res.send(productController.getProductById(req, res));
});

app.post("/api/products", (req, res) => {
  res.send(productController.addProduct(req, res));
});

// Update a product
app.patch("/api/products/:id", (req, res) => {
  res.send(productController.updateProduct(req, res));
});

app.delete("/api/products/:id", (req, res) => {
  res.send(productController.deleteProduct(req, res));
});

// ** without Use Static Method
// const { handle } = new ErrorMiddleware();

// app.use(
//   (
//     err: Error,
//     req: Request,
//     res: Response,
//     next: NextFunction
//   ) => {
//     handle(req, res, next, err);
//   }
// );

// ** with Use Static Method
app.use(ErrorMiddleware.handle);

// ** NOT FOUND MIDDLEWARE
app.use(NotFoundMiddleware.handle);

const PORT = 5000;
app.listen(PORT, () => {
  console.log("Server is running on port 5000");
});
