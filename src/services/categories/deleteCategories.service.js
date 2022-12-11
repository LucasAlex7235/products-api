import database from "../../database";

const deleteCategoriesServices = async (id) => {
  await database
    .query(
      `
      DELETE FROM 
	      categories
      WHERE 
        categories.id = $1;
    `,
      [id]
    )
    .then((res) => res.rows);

  return {};
};

export { deleteCategoriesServices };
