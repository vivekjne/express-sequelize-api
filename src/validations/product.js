import Joi from "@hapi/joi";

const createProductSchema = Joi.object({
  name: Joi.string()
    .min(3)
    .max(200)
    .required(),
  description: Joi.string().required(),
  category: Joi.string().required(),
  quantity: Joi.array()
    .items(
      Joi.object({
        size: Joi.string().required(),
        price: Joi.number().required()
      })
    )
    .required(),
  stock: Joi.number()
    .integer()
    .required(),
  slug: Joi.string()
});

const updateProductSchema = Joi.object({
  name: Joi.string()
    .min(3)
    .max(200),
  description: Joi.string(),
  category: Joi.string(),
  quantity: Joi.array().items(
    Joi.object({
      size: Joi.string().required(),
      price: Joi.number().required()
    })
  ),
  stock: Joi.number().integer()
});

export { createProductSchema, updateProductSchema };
