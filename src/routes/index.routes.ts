import { Router } from 'express';

import { categoriesRoutes } from './categories.routes';
import { specificationRoutes } from './specifications.routes';

export const router = Router();

router.use('/categories', categoriesRoutes);
router.use('/specifications', specificationRoutes);