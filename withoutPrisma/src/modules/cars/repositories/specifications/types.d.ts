import { Specification } from "../../models/Specification";

//DTO = Data Transfer Object => objeto que faz transferência de dados de uma camada para outra.
export interface ICreateSpecificationDTO {
   name: string;
   description: string;
}

export interface ISpecificationRepository {
   create({ name, description }: ICreateSpecificationDTO): Specification;
   findByName(name: string): Specification | undefined;
   list(): Specification[];
}