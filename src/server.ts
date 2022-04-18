import express from 'express';

import { config } from './config';
import { categoriesRoutes } from './routes/categories.routes';
import { specificationRoutes } from './routes/specifications.routes';

const app = express();

app.use(express.json());

app.use('/categories', categoriesRoutes);
app.use('/specifications', specificationRoutes);

function listenCB() {
   console.log(`Server is running on port: ${config.port}`);
}

app.listen(config.port , listenCB);