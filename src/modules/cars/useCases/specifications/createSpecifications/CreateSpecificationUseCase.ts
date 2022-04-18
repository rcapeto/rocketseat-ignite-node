import { Specification } from "../../../models/Specification";
import { ISpecificationRepository } from "../../../repositories/specifications/types";

interface IRequest {
   name: string;
   description: string;
}

export class CreateSpecificationUseCase {
   constructor(private specificationRepository: ISpecificationRepository) {};

   execute({ name, description }: IRequest): Specification {
      const hasSpec = this.specificationRepository.findByName(name);

      if(hasSpec) {
         throw new Error('Specification already exists!');
      } else {
         const specification = this.specificationRepository.create({ name, description });
         return specification;
      }
   };
}