import { Category } from "../models/Category";

export interface ICategoryRepository {
    create(category: Category): Promise<Category>;
    findById(id: string): Promise<Category | null>;
    findAll(): Promise<Category[]>;
    update(id: string, category: Category): Promise<Category | null>;
    delete(id:string): Promise<void>;
}