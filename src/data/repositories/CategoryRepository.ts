import { ICategoryRepository } from "../../domain/repositories/ICategoryRepository";
import { Category } from "../../domain/models/Category";
import mongoose, {Document, Schema} from "mongoose";

interface CategoryDocument extends Category, Document {}

const CategorySchema: Schema = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: true}
});

const CategoryModel = mongoose.model<CategoryDocument>("Category", CategorySchema);

export class CategoryRepository implements ICategoryRepository {
    async create(category: Category): Promise<Category> {
        const createdCategory = new CategoryModel(category);
        return createdCategory.save();
    }

    async findById(id: string): Promise<Category | null> {
        return CategoryModel.findById(id).exec();
    }

    async findAll(): Promise<Category[]> {
        return CategoryModel.find().exec();
    }

    async update(id: string, category: Category): Promise<Category | null> {
        return CategoryModel.findByIdAndUpdate(id, category, {new: true}).exec();
    }

    async delete(id: string): Promise<void> {
        await CategoryModel.findByIdAndDelete(id).exec();
    }
}