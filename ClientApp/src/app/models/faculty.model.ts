import { Subject } from './subject.model';

export class Faculty {
  id: number;
  code: string;
  facultyName: string;
  direction: string;
  grant: number;
  contract: number;
  educationType: string;
  language: string;
  grantPass: number;
  contractPass: number;
  period: string;
  asFirst: number;
  asSecond: number;
  asThird: number;
  facultyNameRu: string;
  educationTypeRu: string;
  languageRu: string;
  subject: Subject;
}

export class FacultyDto {
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

}
