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


  static createUniversity(id: number, nameUz: string, nameRu: string, location: number) {

    let u = new University();
    u.id = id;
    u.nameUz = nameUz;
    u.nameRu = nameRu;
    u.location = location;

    return u;
  }


  faculties?: Faculty[] = [];
}
