import database from "../../database";

const createProductsServices = async ({ name, price, category_id }) => {
  const queryResponse = await database
    .query(
      `INSERT INTO 
          products(name, price, category_id)
      VALUES ($1, $2, $3)
          RETURNING *;`,
      [name, price, category_id]
    )
    .then((res) => res.rows);

  return queryResponse[0];
};

export { createProductsServices };
