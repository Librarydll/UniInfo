import { Subject } from './subject.model';

export class Faculty {
  id?: number;
  code?: string;
  facultyName?: string;
  direction?: string;
  grant?: number;
  contract?: number;
  educationType?: string;
  language?: string;
  grantPass?: number;
  contractPass?: number;
  period?: string;
  asFirst?: number;
  asSecond?: number;
  asThird?: number;
  facultyNameRu?: string;
  educationTypeRu?: string;
  languageRu?: string;
  subject?: Subject;
}
