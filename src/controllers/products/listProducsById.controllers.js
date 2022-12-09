import { listProductsByIdServices } from "../index";

const listProductsByIdControllers = async (req, res) => {
  const id = req.params.id;
  const dataBase = await listProductsByIdServices(id);
  return res.status(200).json(dataBase);
};

export { listProductsByIdControllers };
