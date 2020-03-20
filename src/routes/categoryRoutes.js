import express from "express";
import { Router } from "express";
import {
  getAllCategories,
  createCategory,
  updateCategory,
  deleteCategory,
  getCategoryBySlug
} from "../controllers/categoryController";
import validationMiddleware from "../middlewares/validation";
import {
  createCategorySchema,
  updateCategorySchema
} from "../validations/category";
const router = Router();

router
  .route("/")
  .get(getAllCategories)
  .post(validationMiddleware(createCategorySchema), createCategory);

router
  .route("/:id")

  .put(validationMiddleware(updateCategorySchema), updateCategory)
  .delete(deleteCategory);

export default router;
