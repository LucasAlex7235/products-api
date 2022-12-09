import * as yup from "yup";
import { v4 as uuidv4 } from "uuid";

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
