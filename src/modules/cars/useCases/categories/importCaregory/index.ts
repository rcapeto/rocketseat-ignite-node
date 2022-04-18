import { CategoryRepository } from "../../../repositories/categories/CategoryRepository";
import { ImportCategoryController } from "./ImportCategoryController";
import { ImportCategoryUsecase } from "./ImportCategoryUseCase";

const categoryRepository = CategoryRepository.getInstance();
const importCategoryUseCase = new ImportCategoryUsecase(categoryRepository);
export const importCategoryController = new ImportCategoryController(importCategoryUseCase);