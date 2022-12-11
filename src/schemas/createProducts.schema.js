import * as yup from "yup";

const createProductsShape = yup.object().shape({
  name: yup
    .string("field name needs to be string")
    .min(3)
    .required("field name is required"),
  price: yup
    .number("field price needs to be number")
    .required("field price is required"),
  category_id: yup
    .number("field price needs to be number")
    .required("field category is required"),
});

export { createProductsShape };
