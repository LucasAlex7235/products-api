import database from "../../database";

const listProductsByCategoriesServices = async (id) => {
  const queryResponse = await database
    .query(
      `SELECT 
        products.id, 
        products.name,
        products.price,
        categories.id AS category
      FROM 	
        products
      JOIN 
        categories
      ON 
        categories.id = products.category_id
      WHERE 
        products.category_id = $1;`,
      [id]
    )
    .then((res) => res.rows);

  return queryResponse;
};

export { listProductsByCategoriesServices };
