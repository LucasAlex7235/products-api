import { createProductsControllers } from "../controllers/products/createProducts.controllers";
import { listProductsControllers } from "../controllers/products/listProducs.controllers";
import { validateSchemaMiddleware } from "../middleware/validateSchema.middleware";
import { createCategoriesControllers } from "../controllers/categories/createCategories.controllers";

import { createProductsShape } from "../schemas/createProducts.schema";
import { createCategoriesShape } from "../schemas/createCategories.schema";
import { updateProductsShape } from "../schemas/updateProducts.schema";

import { listCategoriesControllers } from "../controllers/categories/listCategories.controllers";
import { listProductsByIdControllers } from "../controllers/products/listProducsById.controllers";
import { listCategoriesByIdControllers } from "../controllers/categories/listCategoriesById.controllers";
import { listProductsByCategoriesControllers } from "../controllers/products/listProductsByCategories.controllers";
import { validateIdMiddleware } from "../middleware/validateId.middleware";
import { verifyExistsMiddleware } from "../middleware/verifyExists.middleware";

import { updateCategoriesControllers } from "../controllers/categories/ updateCategories.controllers";
import { updateProductsControllers } from "../controllers/products/updateProducts.controllers";

import { deleteProductsControllers } from "../controllers/products/deleteProducts.controllers";
import { deleteCategoriesControllers } from "../controllers/categories/deleteCategories.controllers";

export {
  createProductsControllers,
  listProductsControllers,
  validateSchemaMiddleware,
  createProductsShape,
  createCategoriesControllers,
  createCategoriesShape,
  listCategoriesControllers,
  listProductsByIdControllers,
  listCategoriesByIdControllers,
  validateIdMiddleware,
  updateCategoriesControllers,
  updateProductsControllers,
  updateProductsShape,
  verifyExistsMiddleware,
  listProductsByCategoriesControllers,
  deleteProductsControllers,
  deleteCategoriesControllers,
};
