import { listProductsServices } from "../index";

const listProductsControllers = async (req, res) => {
  const dataBase = await listProductsServices();
  return res.status(200).json(dataBase);
};

export { listProductsControllers };
