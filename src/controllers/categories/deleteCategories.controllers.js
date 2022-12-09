import { deleteCategoriesServices } from "../index";

const deleteCategoriesControllers = async (req, res) => {
  const id = req.params.id;
  const dataBase = await deleteCategoriesServices(id);
  return res.status(204).json(dataBase);
};

export { deleteCategoriesControllers };
