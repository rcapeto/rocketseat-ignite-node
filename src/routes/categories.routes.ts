import { Router } from 'express';
import multer from 'multer';

import { createCategoryController } from '../modules/cars/useCases/categories/createCategory';
import { listCategoriesController } from '../modules/cars/useCases/categories/listCategories';
import { importCategoryController } from '../modules/cars/useCases/categories/importCaregory';

import { multerOptions } from '../config/multer';

const categoriesRoutes = Router();
const upload = multer(multerOptions);

categoriesRoutes.post('/', (request, response) => {
   return createCategoryController.handle(request, response);
});

categoriesRoutes.get('/', (request, response) => {
   return listCategoriesController.handle(request, response);
});

categoriesRoutes.post('/import', upload.single('file'), (request, response) => {
   return importCategoryController.handle(request, response);
});

export { categoriesRoutes };