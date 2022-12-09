import { listProductsByCategoriesServices } from "../index";

const listProductsByCategoriesControllers = async (req, res) => {
  const id = req.params.id;
  const dataBase = await listProductsByCategoriesServices(id);
  return res.status(200).json(dataBase);
};

export { listProductsByCategoriesControllers };
