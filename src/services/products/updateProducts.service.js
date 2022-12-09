import database from "../../database";

const updateProductsServices = async (productData, id) => {
  let query = "UPDATE products SET ";

  const keys = Object.keys(productData);
  const values = Object.values(productData);

  keys.forEach((key, index) => {
    query += `${key} = \$${(index += 1)}, `;
  });

  query = query.slice(0, -2);

  query += ` WHERE products.id = \$${(keys.length += 1)} RETURNING *;`;

  const queryResponse = await database
    .query(query, [...values, id])
    .then((res) => res.rows);

  return queryResponse[0];
};

export { updateProductsServices };
