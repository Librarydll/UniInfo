import { Faculty } from './faculty.model';


export class University {
  id?: number;
  nameUz?: string;
  nameRu?: string;
  location?: number;
  faks?: string;
  webPage?: string;
  address?: string;
  phone?: string;
  universityIndex: string;
  rating: number;
  isNational?: boolean;

  faculties?: Faculty[] = [];
}
