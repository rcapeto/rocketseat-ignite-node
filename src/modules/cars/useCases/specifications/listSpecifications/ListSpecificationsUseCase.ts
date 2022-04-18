import { SpecificationRepository } from '../../../repositories/specifications/SpecificationRepository';

export class ListSpecificationsUseCase {
   constructor(
      private specificationRepository: SpecificationRepository
   ) {}

   execute() {
      const specifications = this.specificationRepository.list();
      return specifications;
   }
}