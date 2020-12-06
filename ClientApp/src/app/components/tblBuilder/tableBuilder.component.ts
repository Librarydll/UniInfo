import { Component } from "@angular/core";
import { TableHeader } from '../../models/tableHeader';
import { Faculty } from '../../models/faculty.model';
import { MessageService } from '../../models/messageService';
import { Repository } from '../../models/repository';
import { LanguageProvider } from '../../services/languageProvider';
import { University } from '../../models/university.model';
import { SubjectMap } from '../../models/subject.model';
import { ModelDictionary } from '../../models/modelDictionary.model';
import { Style } from '../../models/style';



@Component({
  selector: "table-builder",
  templateUrl: "tableBuilder.component.html",
})
export class TableBuilderComponent {

  orderByPointFlag: number = 0;//if 1 desc grant ,2 desc contract,3 asc grant,4 asc contract
  orderByCountFlag: number = 0;//if 1 desc grant ,2 desc contract,3 asc grant,4 asc contract
  arrowByPointClass: string = "arrow-up arrow-position-up arrow-up-grand";//default
  arrowByCountClass: string = "arrow-up arrow-position-up arrow-up-grand";//default
  grantPoint: boolean;
  grantCount: boolean;
  contractPoint: boolean;
  contractCount: boolean;
  currentFaculties: Faculty[];
  
  onBuild() {
   this.createDictionary();
  }

  tHeader: TableHeader;
  universities: University[] = [];
  constructor(private repo: Repository, private messageService: MessageService, private languageProvider: LanguageProvider, public style: Style) {
    this.tHeader = new TableHeader();
    this.tHeader.setTableHeader(languageProvider.getLanguage());
    this.messageService.listen().subscribe((value) => {
      if (value == "build") {
        this.onBuild();
      }
      else {
        this.clear();
      }
    })
  }

  get currentLanguage(): string {
    return this.languageProvider.getLanguage();
  }

  get isNoResult(): boolean {
    let edutype = this.repo.currentSubject.educationType;
    let lang = this.repo.currentSubject.language;
    if (edutype === null || edutype === undefined) return true;
    if (lang === null || lang === undefined) return true;
    if (this.universities.length <= 0) return false;
    return true;

  }

  getUniversityName(u: University):string {
    if (this.languageProvider.getLanguage() == "uz")
      return u.nameUz;
    return u.nameRu;
  }

  get tableHeader() : TableHeader {
    return this.tHeader;
  }

  createDictionary() {
    let edutype = this.repo.currentSubject.educationType.code;
    let lang = this.repo.currentSubject.language.code;
    let result: University[] = [];
   
    this.repo.allUniversities.forEach(function (university: University) {
      
      let u = University.createUniversity(university.id, university.nameUz, university.nameRu, university.location);
      let f = university.faculties.filter(f => f.educationType == edutype && f.language == lang);

      if (f !== undefined && f.length > 0) {
        u.faculties = f;
        result.push(u);
      }
    });
    this.universities = result;
    if (this.universities[0]!==undefined)
      this.currentFaculties = this.universities[0].faculties;
  }
  clear() {
    this.universities = [];
  }


  createSubject(s: SubjectMap): string {
    if (s === undefined || s === null) return null;
    let first = ModelDictionary.createModelDictionaryBySubject(s.firstSubject);
    let second = ModelDictionary.createModelDictionaryBySubject(s.secondSubject);
    if (this.currentLanguage == "ru")
      return `${first.ruVersion}, ${second.ruVersion}`;
    return `${first.uzVersion}, ${second.uzVersion}`;

  }

  orderByPoint() {
    if (!this.canOrder()) return;
    this.orderByPointFlag += 1;
    if (this.orderByPointFlag == 1) {
      this.currentFaculties = this.currentFaculties.sort((a, b) => (a.grantPass < b.grantPass) ? 1 : -1);
      this.arrowByPointClass = "arrow-up arrow-position-up arrow-up-grand";

      this.grantPoint = true;
      this.contractPoint = false;

    } else if (this.orderByPointFlag == 2) {
      this.currentFaculties = this.currentFaculties.sort((a, b) => (a.grant > b.grant) ? 1 : -1);
      this.arrowByPointClass = "arrow-down arrow-position-down arrow-down-grand";

      this.grantPoint = true;
      this.contractPoint = false;

    } else if (this.orderByPointFlag == 3) {
      this.currentFaculties = this.currentFaculties.sort((a, b) => (a.contractPass < b.contractPass) ? 1 : -1);
      this.arrowByPointClass = "arrow-up arrow-position-up arrow-up-contract";

      this.grantPoint = false;
      this.contractPoint = true;

    }
    else if (this.orderByPointFlag == 4) {
      this.currentFaculties = this.currentFaculties.sort((a, b) => (a.contractPass > b.contractPass) ? 1 : -1);
      this.arrowByPointClass = "arrow-down arrow-position-down arrow-down-contract";

      this.grantPoint = false;
      this.contractPoint = true;
    }

    if (this.orderByPointFlag == 4) {
      this.orderByPointFlag = 0;
    }
  }

  orderByCount() {
    if (!this.canOrder()) return;
    this.orderByCountFlag += 1;
    if (this.orderByCountFlag == 1) {
      this.currentFaculties = this.currentFaculties.sort((a, b) => (a.grant < b.grant) ? 1 : -1);
      this.arrowByCountClass = "arrow-up arrow-position-up arrow-up-grand";

      this.grantCount = true;
      this.contractCount = false;

    } else if (this.orderByCountFlag == 2) {
      this.currentFaculties = this.currentFaculties.sort((a, b) => (a.grant > b.grant) ? 1 : -1);
      this.arrowByCountClass = "arrow-down arrow-position-down arrow-down-grand";

      this.grantCount = true;
      this.contractCount = false;

    } else if (this.orderByCountFlag == 3) {
      this.currentFaculties = this.currentFaculties.sort((a, b) => (a.contract < b.contract) ? 1 : -1);
      this.arrowByCountClass = "arrow-up arrow-position-up arrow-up-contract";

      this.grantCount = false;
      this.contractCount = true;

    }
    else if (this.orderByCountFlag == 4) {
      this.currentFaculties = this.currentFaculties.sort((a, b) => (a.contract > b.contract) ? 1 : -1);
      this.arrowByCountClass = "arrow-down arrow-position-down arrow-down-contract";

      this.grantCount = false;
      this.contractCount = true;
    }


    if (this.orderByCountFlag == 4) {
      this.orderByCountFlag = 0;
    }

  }


  canOrder(): boolean {
    return this.style.canOrder;
  }

}



