import { Faculty } from './faculty.model';


export class University {
  id?: number;
  nameUz?: string;
  location?: number;
  rating?: number;
  isNational?: boolean;
  nameRu?: string;
  faculties?: Faculty[] = [];
}
