import database from "../../database";

const updateCategoriesServices = async ({ name }, id) => {
  const queryResponse = await database
    .query(
      `UPDATE 
          categories
        SET 
          name = $1
        WHERE categories.id = $2
        RETURNING *;`,
      [name, id]
    )
    .then((res) => res.rows);

  return queryResponse[0];
};

export { updateCategoriesServices };
