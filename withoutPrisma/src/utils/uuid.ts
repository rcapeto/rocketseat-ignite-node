import { v4 as uuidV4, V4Options } from 'uuid';


export const createNewID = (options?: V4Options) => {
   return uuidV4(options);
};