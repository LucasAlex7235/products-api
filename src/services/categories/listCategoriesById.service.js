import database from "../../database";

const listCategoriesByIdServices = async (id) => {
  const queryResponse = await database
    .query(
      `SELECT 
          *
        FROM 	
          categories
        WHERE categories.id = $1;`,
      [id]
    )
    .then((res) => res.rows);

  return queryResponse[0];
};

export { listCategoriesByIdServices };
