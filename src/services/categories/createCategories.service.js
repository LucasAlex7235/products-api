import database from "../../database";

const createCategoriesServices = async ({ name }) => {
  const queryResponse = await database
    .query(
      `INSERT INTO 
          categories(name)
        VALUES ($1)
          RETURNING *;`,
      [name]
    )
    .then((res) => res.rows);

  return queryResponse[0];
};

export { createCategoriesServices };
