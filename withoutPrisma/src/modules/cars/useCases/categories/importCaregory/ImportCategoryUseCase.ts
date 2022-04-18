import fs from 'fs';
import { parse } from 'csv-parse';
import { CategoryRepository } from '../../../repositories/categories/CategoryRepository';

/**
 * Arquivo de categorias => 'Name,description'
 * 
 */

interface IImportCategory {
   name: string;
   description: string;
}

export class ImportCategoryUsecase {
   constructor(
      private categoriesRepository: CategoryRepository
   ) {}

   loadCategories(file: Express.Multer.File): Promise<IImportCategory[]> {
      return new Promise((resolve, reject) => {
         //ler arquivo
         const stream = fs.createReadStream(file.path);
         const parseFile = parse();
         const categories: IImportCategory[] = [];
   
         stream.pipe(parseFile);
   
         parseFile.on('data', async (line: string[]) => {
            //line => array de string quebrando na ,
            const [name, description] = line;
            categories.push({ name, description });
         }).on('end', () => {
            resolve(categories);
         }).on('error', err => {
            fs.promises.unlink(file.path); //apagar o arquivo da pasta tmp
            reject(err);
         });
      });
     
   }

   async execute(file: Express.Multer.File): Promise<void> {
      const categories = await this.loadCategories(file);

      for(const category of categories) {
         const { name, description } = category;
         const hasCategory = this.categoriesRepository.findByName(name);

         if(!hasCategory) this.categoriesRepository.create({ name, description });
      }
   } 
}