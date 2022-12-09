import { listCategoriesServices } from "../index";

const listCategoriesControllers = async (req, res) => {
  const dataBase = await listCategoriesServices();
  return res.status(200).json(dataBase);
};

export { listCategoriesControllers };
