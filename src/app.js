import "express-async-errors";
import express from "express";
import categoriesRouter from "./routers/categories.router";
import productsRouter from "./routers/products.router";
import { errorHandler } from "./errors/errors";

const app = express();

app.use(express.json());

app.use("/products", productsRouter);
app.use("/categories", categoriesRouter);

app.use(errorHandler);
export default app;
