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
  totalApply: number;
  universityId: number;
  subject: SubjectMap;
}
