import { SpecificationRepository } from "../../../repositories/specifications/SpecificationRepository";
import { ListSpecificationsController } from "./ListSpecificationsController";
import { ListSpecificationsUseCase } from "./ListSpecificationsUseCase";

const specificationsRepository = SpecificationRepository.getInstance();
const listSpecificationsUseCase = new ListSpecificationsUseCase(specificationsRepository);

export const listSpecificationsController = new ListSpecificationsController(listSpecificationsUseCase);