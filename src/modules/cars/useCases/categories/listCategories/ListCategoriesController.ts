import { Request, Response } from 'express';

import { config } from '../../../../../config';
import { ListCategoriesUseCase } from './ListCategoriesUseCase';

export class ListCategoriesController {
   constructor(
      private listCategoriesUseCase: ListCategoriesUseCase
   ) {}

   handle(request: Request, response: Response) {
      const categories = this.listCategoriesUseCase.execute();
      return response.status(config.status.ok).json({ 
         data: categories, 
         error: false 
      });
   }
}