import { Category } from "../../../models/Category";
import { ICategoryRepository } from "../../../repositories/categories/types";

export class ListCategoriesUseCase {
   constructor(private categoryRepository: ICategoryRepository) {}

   execute(): Category[] {
      const categories = this.categoryRepository.list();
      return categories;
   }
};