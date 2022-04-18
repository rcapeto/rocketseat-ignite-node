import { createNewID } from '../../../utils/uuid';

export class Category {
   constructor(
      public name: string,
      public description: string,
      public created_at: Date,
      public id?: string
   ) {
      if(!id) {
         this.id = createNewID();
      }
   }
}