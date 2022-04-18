import { Specification } from "../../models/Specification";
import { ICreateSpecificationDTO, ISpecificationRepository } from "./types";

export class SpecificationRepository implements ISpecificationRepository {
   private specifications: Specification[];
   private static INSTANCE: SpecificationRepository;

   private constructor() {
      this.specifications = [];
   }

   public static getInstance() {
      if(!SpecificationRepository.INSTANCE) {
         SpecificationRepository.INSTANCE = new SpecificationRepository();
      }

      return SpecificationRepository.INSTANCE;
   }

   create({ name, description }: ICreateSpecificationDTO): Specification {
      const specification = new Specification(name, description, new Date());
      this.specifications.push(specification);
      return specification;
   }

   findByName(name: string): Specification | undefined {
      const specification = this.specifications.find(spec => spec.name === name);
      return specification;
   }

   list(): Specification[] {
      return this.specifications;
   }
}