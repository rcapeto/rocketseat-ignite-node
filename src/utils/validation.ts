import { ValidadeValuesConfig } from '../types/utils';

export const validateValues = (data: Record<string, any>): ValidadeValuesConfig => {
   const config: ValidadeValuesConfig = {
      hasEmptyField: false,
      emptyFields: [],
   };

   for(const key in data) {
      const value = data[key];

      if(!value) {
         config.hasEmptyField = true;
         config.emptyFields.push({ key });
      }
   }

   return config;
};