import { ICategoryRepository } from "../../domain/repositories/ICategoryRepository";
import { Category } from "../../domain/models/Category";

export class CreateCategory {
    constructor(private categoryRepository: ICategoryRepository) {}

    async execute(category: Category): Promise<Category> {
        return this.categoryRepository.create(category);
    }
}