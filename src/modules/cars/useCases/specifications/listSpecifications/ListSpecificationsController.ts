import { Request, Response } from "express";
import { ListSpecificationsUseCase } from "./ListSpecificationsUseCase";

import { config } from '../../../../../config';

export class ListSpecificationsController {
   constructor(
      public listSpecificationsUseCase: ListSpecificationsUseCase
   ) {}

   handle(request: Request, response: Response) {
      const specifications = this.listSpecificationsUseCase.execute();

      return response.status(config.status.ok).json({
         data: specifications,
         error: false,
      });
   }
}