import { Request, Response } from 'express';

import { config } from '../../../../../config';
import { validateValues } from '../../../../../utils/validation';
import { CreateCategoryUseCase } from './CreateCategoryUseCase';

export class CreateCategoryController {
   constructor(
      private createCategoryUseCase: CreateCategoryUseCase
   ) {}

   handle(request: Request, response: Response) {
      const { emptyFields, hasEmptyField } = validateValues(request.body);

      if(!hasEmptyField) {
         const { name, description } = request.body;
   
         try {
            const category = this.createCategoryUseCase.execute({ name, description });
   
            return response.status(config.status.created).json({
               message: "",
               error: false,
               data: category,
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