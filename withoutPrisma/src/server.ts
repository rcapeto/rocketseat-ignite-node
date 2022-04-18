import express from 'express';
import swaggerUI from 'swagger-ui-express';

import { config } from './config';
import swaggerConfig from './config/swagger.json';
import { router } from './routes/index.routes';

const app = express();

app.use(express.json());

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerConfig));

app.use(router);

function listenCB() {
   console.log(`Server is running on port: ${config.port}`);
}

app.listen(config.port , listenCB);