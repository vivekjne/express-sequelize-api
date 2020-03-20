import Joi from "@hapi/joi";

const createCategorySchema = Joi.object({
  title: Joi.string()
    .min(3)
    .max(200)
    .required(),
  description: Joi.string(),
  mediaType: Joi.string().required(),
  image: Joi.string()
});

const updateCategorySchema = Joi.object({
  title: Joi.string()
    .min(3)
    .max(100),
  description: Joi.string()
});

export { createCategorySchema, updateCategorySchema };
