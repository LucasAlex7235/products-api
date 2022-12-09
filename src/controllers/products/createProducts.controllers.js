import { createProductsServices } from "../index";

const createProductsControllers = async (req, res) => {
  const body = req.validatedBody;
  const dataBase = await createProductsServices(body);
  return res.status(201).json(dataBase);
};

export { createProductsControllers };
