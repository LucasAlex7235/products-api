import { updateCategoriesServices } from "../index";

const updateCategoriesControllers = async (req, res) => {
  const body = req.body;
  const id = req.params.id;
  const dataBase = await updateCategoriesServices(body, id);
  return res.status(200).json(dataBase);
};

export { updateCategoriesControllers };
