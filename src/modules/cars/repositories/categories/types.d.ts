import { Category } from "../../models/Category";
import { ICreateCategoryDTO } from './CategoryRepository';

//DTO = Data Transfer Object => objeto que faz transferência de dados de uma camada para outra.
export interface ICreateCategoryDTO {
   name: string;
   description: string;
}

export interface ICategoryRepository {
   findByName(name: string): Category | undefined;
   list(): Category[];
   create({ name, description }: ICreateCategoryDTO): Category;
}