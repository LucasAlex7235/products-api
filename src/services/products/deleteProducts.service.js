import database from "../../database";

const deleteProductsServices = async (id) => {
  const queryResponse = await database
    .query(
      `
      DELETE FROM 
	      products
      WHERE 
	      products.id = $1;
    `,
      [id]
    )
    .then((res) => res.rows);

  return {};
};

export { deleteProductsServices };
