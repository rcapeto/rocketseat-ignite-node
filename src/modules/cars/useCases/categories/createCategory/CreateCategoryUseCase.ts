import { ICategoryRepository } from "../../../repositories/categories/types";

interface IRequest {
   name: string;
   description: string;
}

export class CreateCategoryUseCase {
   constructor(private categoryRepository: ICategoryRepository) {}

   execute({ name, description }: IRequest) {
      const hasCategory = this.categoryRepository.findByName(name);

      if(hasCategory) {
         throw new Error('Category already exists');
      } else {
         const category = this.categoryRepository.create({ name, description });
         return category;
      }
   }
};