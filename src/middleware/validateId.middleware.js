import database from "../database";
import { AppError } from "../errors/errors";

const validateIdMiddleware = (nameData) => async (req, res, next) => {
  const id = req.params.id;
  const IdDataBase = await database
    .query(
      `SELECT 
            ${nameData}.id
          FROM 	
            ${nameData};`
    )
    .then((res) => res.rows);

  const verifyIdExists = IdDataBase.find((name) => name.id === id);

  if (!verifyIdExists) {
    throw new AppError("Id not exists", 404);
  }
  return next();
};

export { validateIdMiddleware };
