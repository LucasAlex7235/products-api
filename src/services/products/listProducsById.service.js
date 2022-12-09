import database from "../../database";

const listProductsByIdServices = async (id) => {
  const queryResponse = await database
    .query(
      `SELECT 
          *
        FROM 	
          products
        WHERE products.id = $1;`,
      [id]
    )
    .then((res) => res.rows);

  return queryResponse[0];
};

export { listProductsByIdServices };
