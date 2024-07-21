import { ICategoryRepository } from "../../domain/repositories/ICategoryRepository";
import { Category } from "../../domain/models/Category";

export class UpdateCategory {
    constructor(private categoryRepository: ICategoryRepository) {}
    async execute(id: string, category: Category): Promise<Category | null> {
        return this.categoryRepository.update(id, category);
    }
}