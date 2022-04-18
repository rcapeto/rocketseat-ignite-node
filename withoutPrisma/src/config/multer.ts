import multer, { Options } from 'multer';
import path from 'path';

export const multerOptions: Options = {
   storage: multer.diskStorage({
      destination: path.resolve(__dirname, '..', '..', 'tmp'),
      filename: (request, file, callback) => {
         const filename = `${Date.now()}-${file.originalname}`;
         callback(null, filename);
      },
   }),
}