import { updateProductsServices } from "../index";

const updateProductsControllers = async (req, res) => {
  const body = req.validatedBody;
  const id = req.params.id;
  const dataBase = await updateProductsServices(body, id);
  return res.status(200).json(dataBase);
};

export { updateProductsControllers };
