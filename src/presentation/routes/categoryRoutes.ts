import { Router } from "express";
import { CategoryController } from "../controllers/CategoryController";
 
const router = Router();

router.post('/categories', CategoryController.createCategory);
router.get('/categories/:id', CategoryController.getCategory);
router.get('/categories', CategoryController.getCategories);
router.put('/categories/:id', CategoryController.updateCategory);
router.delete('/categories/:id', CategoryController.deleteCategory);

export default router;