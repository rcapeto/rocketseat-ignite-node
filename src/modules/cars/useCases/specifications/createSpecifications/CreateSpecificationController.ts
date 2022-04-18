import { Request, Response } from 'express';

import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";
import { config } from '../../../../../config';
import { validateValues } from '../../../../../utils/validation';

export class CreateSpecificationController {
   constructor(
      public createSpecificationUseCase: CreateSpecificationUseCase
   ) {}

   handle(request: Request, response: Response) {
      const { emptyFields, hasEmptyField } = validateValues(request.body);

   if(!hasEmptyField) {
      const { name, description } = request.body;

      try {
         const specification = this.createSpecificationUseCase.execute({ name, description });

         return response.status(config.status.created).json({
            message: "",
            error: false,
            data: specification,
         });

      } catch(err) {
         const error = err as any;

         return response.status(config.status.bad_request).json({
            message: error.message,
            error: true,
         });
      }

   } else {
      return response.status(config.status.bad_request).json({
         message: 'Please fill all fields',
         data: emptyFields,
         error: true
      });
   }
   }
}