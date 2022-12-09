import {
  createCategoriesControllers,
  validateSchemaMiddleware,
  createCategoriesShape,
  listCategoriesControllers,
  listCategoriesByIdControllers,
  validateIdMiddleware,
  updateCategoriesControllers,
  verifyExistsMiddleware,
  deleteCategoriesControllers,
} from "./index";
import { Router } from "express";

const categoriesRouter = Router();

categoriesRouter.get("", listCategoriesControllers);
categoriesRouter.get(
  "/:id",
  validateIdMiddleware("categories"),
  listCategoriesByIdControllers
);
categoriesRouter.post(
  "",
  validateSchemaMiddleware(createCategoriesShape),
  verifyExistsMiddleware("categories"),
  createCategoriesControllers
);
categoriesRouter.patch(
  "/:id",
  validateIdMiddleware("categories"),
  updateCategoriesControllers
);
categoriesRouter.delete(
  "/:id",
  validateIdMiddleware("categories"),
  deleteCategoriesControllers
);

export default categoriesRouter;
