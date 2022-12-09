import { createCategoriesServices } from "../index";

const createCategoriesControllers = async (req, res) => {
  const body = req.body;
  const dataBase = await createCategoriesServices(body);
  return res.status(201).json(dataBase);
};

export { createCategoriesControllers };
