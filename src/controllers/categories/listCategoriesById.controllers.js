import { listCategoriesByIdServices } from "../index";

const listCategoriesByIdControllers = async (req, res) => {
  const id = req.params.id;
  const dataBase = await listCategoriesByIdServices(id);
  return res.status(200).json(dataBase);
};

export { listCategoriesByIdControllers };
