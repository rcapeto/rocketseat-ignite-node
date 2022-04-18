import { CategoryRepository } from "../../../repositories/categories/CategoryRepository";
import { ListCategoriesController } from "./ListCategoriesController";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";

const categoriesRespository = CategoryRepository.getInstance();
const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRespository);

export const listCategoriesController = new ListCategoriesController(listCategoriesUseCase);