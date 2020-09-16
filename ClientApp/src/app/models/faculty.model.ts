import { SubjectMap } from './subject.model';


export class Faculty {
  id: number;
  code: string;
  facultyNameUz: string;
  facultyNameRu: string;
  grant: number;
  contract: number;
  educationType: number;
  language: number;
  grantPass: number;
  contractPass: number;
  period: string;
  asFirst: number;
  asSecond: number;
  asThird: number;
  universityNameRu: string;
  universityNameUz: string;
  universityId: number;
  subject: SubjectMap;
}
