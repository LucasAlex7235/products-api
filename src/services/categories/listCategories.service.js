import database from "../../database";

const listCategoriesServices = async () => {
  const queryResponse = await database
    .query(
      `SELECT 
          *
       FROM 	
          categories;`
    )
    .then((res) => res.rows);

  return queryResponse;
};

export { listCategoriesServices };
