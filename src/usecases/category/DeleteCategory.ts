import { ICategoryRepository } from "../../domain/repositories/ICategoryRepository";
import { Category } from "../../domain/models/Category";

export class DeleteCategory {
    constructor(private categoryRepository: ICategoryRepository) {}
    async execute(id: string): Promise <void> {
        return this.categoryRepository.delete(id);
    }
}