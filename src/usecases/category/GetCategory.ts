import { ICategoryRepository } from "../../domain/repositories/ICategoryRepository";
import { Category } from "../../domain/models/Category";

export class GetCategory {
    constructor(private categoryRepository: ICategoryRepository) {}
    async execute(id: string): Promise<Category | null> {
        return this.categoryRepository.findById(id);       
    }
}