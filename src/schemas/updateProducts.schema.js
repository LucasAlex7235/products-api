import * as yup from "yup";

const updateProductsShape = yup.object().shape({
  name: yup.string("field name needs to be string").min(3),
  price: yup.number("field price needs to be number"),
  category_id: yup.number("field price needs to be number"),
});

export { updateProductsShape };
