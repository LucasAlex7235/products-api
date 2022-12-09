import { AppError } from "../errors/errors";

const validateSchemaMiddleware = (serializer) => async (req, res, next) => {
  const validated = await serializer
    .validate(req.body, {
      stripUnknown: true,
      abortEarly: false,
    })
    .catch((err) => {
      return err;
    });

  req.validatedBody = validated;

  if (validated.errors) {
    throw new AppError(validated.errors, 400);
  }

  return next();
};

export { validateSchemaMiddleware };
