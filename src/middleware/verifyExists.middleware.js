import database from "../database";
import { AppError } from "../errors/errors";

const verifyExistsMiddleware = (nameData) => async (req, res, next) => {
  const { name } = req.validatedBody;

  const verify = await database
    .query(
      `SELECT 
            *
          FROM 	
            ${nameData};`
    )
    .then((res) => res.rows);

  const verifyExist = verify.find((el) => el.name === name);

  if (verifyExist) {
    throw new AppError(`the ${nameData} already exists in the database`, 400);
  }

  return next();
};

export { verifyExistsMiddleware };
