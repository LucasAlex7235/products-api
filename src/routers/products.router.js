import {
  listProductsControllers,
  createProductsControllers,
  validateSchemaMiddleware,
  createProductsShape,
  listProductsByIdControllers,
  validateIdMiddleware,
  updateProductsControllers,
  updateProductsShape,
  listProductsByCategoriesControllers,
  deleteProductsControllers,
} from "./index";
import { Router } from "express";

const productsRouter = Router();

productsRouter.get("", listProductsControllers);
productsRouter.get(
  "/:id",
  validateIdMiddleware("products"),
  listProductsByIdControllers
);
productsRouter.get(
  "/category/:id",
  validateIdMiddleware("categories"),
  listProductsByCategoriesControllers
);
productsRouter.post(
  "",
  validateSchemaMiddleware(createProductsShape),
  createProductsControllers
);
productsRouter.patch(
  "/:id",
  validateIdMiddleware("products"),
  validateSchemaMiddleware(updateProductsShape),
  updateProductsControllers
);
productsRouter.delete(
  "/:id",
  validateIdMiddleware("products"),
  deleteProductsControllers
);

export default productsRouter;
