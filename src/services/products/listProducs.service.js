import database from "../../database";

const listProductsServices = async () => {
  const queryResponse = await database
    .query(
      `SELECT 
          *
       FROM 	
          products;`
    )
    .then((res) => res.rows);

  return queryResponse;
};

export { listProductsServices };
