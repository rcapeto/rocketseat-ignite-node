import { Request, Response } from "express";

import { config } from '../../../../../config';
import { ImportCategoryUsecase } from "./ImportCategoryUseCase";

export class ImportCategoryController {
   constructor(
      private importCategoryUseCase: ImportCategoryUsecase
   ) {}

   handle(request: Request, response: Response) {
      const { file } = request;
      const status = file ? config.status.ok: config.status.bad_request;
      const data = {
         message: file ? 'Import with success!' : 'Please select any file.'
      };

      file && this.importCategoryUseCase.execute(file);

      return response.status(status).json({ data });
   }
}