import { ICategoryRepository } from "../../domain/repositories/ICategoryRepository";
import { Category } from "../../domain/models/Category";

export class GetCategories {
    constructor(private categoryRepository: ICategoryRepository) {}
    async execute(): Promise<Category[]> {
        return this.categoryRepository.findAll();
    }
}