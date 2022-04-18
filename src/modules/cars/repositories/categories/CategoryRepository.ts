import { Category } from "../../models/Category";
import { ICategoryRepository, ICreateCategoryDTO } from "./types";

// Design Pattern - Singleton

export class CategoryRepository implements ICategoryRepository {
   private categories: Category[];
   private static INSTANCE: CategoryRepository;

   private constructor() {
      this.categories = [];
   }

   public static getInstance() {
      if(!CategoryRepository.INSTANCE) {
         CategoryRepository.INSTANCE = new CategoryRepository();
      }

      return CategoryRepository.INSTANCE;
   }

   public create({ name, description }: ICreateCategoryDTO): Category {
      const category = new Category(name, description, new Date());
      this.categories.push(category);
      return category;
   }

   public list(): Category[] {
      return this.categories;
   }

   public findByName(name: string): Category | undefined {
      const category = this.categories.find(cat => cat.name === name);
      return category;
   }
};