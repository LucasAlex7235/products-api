import * as yup from "yup";

const createCategoriesShape = yup.object().shape({
  name: yup
    .string("field name needs to be string")
    .min(3)
    .required("field name is required"),
});

export { createCategoriesShape };
