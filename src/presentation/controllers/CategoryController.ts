import { Request, Response } from "express";
import { CategoryRepository } from "../../data/repositories/CategoryRepository";
import { CreateCategory } from "../../usecases/category/CreateCategory";
import { UpdateCategory } from "../../usecases/category/UpdateCategory";
import { DeleteCategory } from "../../usecases/category/DeleteCategory";
import { GetCategory } from "../../usecases/category/GetCategory";
import { GetCategories } from "../../usecases/category/GetCategories";

const categoryRepository = new CategoryRepository();

export class CategoryController {
    static async createCategory(req: Request, res: Response): Promise<void> {
        const createCategory = new CreateCategory(categoryRepository);
        const category = await createCategory.execute(req.body);
        res.status(201).json(category);
    }

    static async getCategory(req: Request, res: Response): Promise<void> {
        const getCategory = new GetCategory(categoryRepository);
        const category = await getCategory.execute(req.params.id);
        res.status(200).json(category);
    }

    static async getCategories(req: Request, res: Response): Promise<void> {
        const getCategories = new GetCategories(categoryRepository);
        const categories = await getCategories.execute();
        res.status(200).json(categories);
      }
    
      static async updateCategory(req: Request, res: Response): Promise<void> {
        const updateCategory = new UpdateCategory(categoryRepository);
        const category = await updateCategory.execute(req.params.id, req.body);
        res.status(200).json(category);
      }
    
      static async deleteCategory(req: Request, res: Response): Promise<void> {
        const deleteCategory = new DeleteCategory(categoryRepository);
        await deleteCategory.execute(req.params.id);
        res.status(204).send();
      }
}