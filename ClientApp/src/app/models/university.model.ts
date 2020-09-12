import { Faculty } from './faculty.model';


export class University {
  id?: number;
  name?: string;
  location?: string;
  rating?: number;
  isNational?: boolean;
  nameRu?: string;
  locationRu?: string;
  faculties?: Faculty[] = [];
}
