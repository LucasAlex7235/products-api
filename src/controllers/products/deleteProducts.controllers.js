import { deleteProductsServices } from "../index";

const deleteProductsControllers = async (req, res) => {
  const id = req.params.id;
  const dataBase = await deleteProductsServices(id);
  return res.status(204).json(dataBase);
};

export { deleteProductsControllers };
