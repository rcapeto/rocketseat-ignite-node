import { Router } from 'express';

import { createSpecificationController } from '../modules/cars/useCases/specifications/createSpecifications';
import { listSpecificationsController } from '../modules/cars/useCases/specifications/listSpecifications';


export const specificationRoutes = Router();


specificationRoutes.post('/', (request, response) => {
   return createSpecificationController.handle(request, response);
});

specificationRoutes.get('/', (request, response) => {
   return listSpecificationsController.handle(request, response);
});