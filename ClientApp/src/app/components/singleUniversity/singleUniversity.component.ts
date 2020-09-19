import { Component } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { University } from '../../models/university.model';
import { ModelDictionary } from '../../models/modelDictionary.model';
import { RetriveService } from '../../services/retriveService';
import { TableHeader } from '../../models/tableHeader';
import { Faculty } from '../../models/faculty.model';
import { Subject, SubjectDto, SubjectMap } from '../../models/subject.model';
import { LanguageProvider } from '../../services/languageProvider';
import { log } from 'util';

const url ="/api/university"

@Component({ 
  templateUrl: "singleUniversity.component.html"
})
export class SingleUniversityComponent {
  order: number;
  id: number;
  currentUniversity: University;
  allEducationType: ModelDictionary[];
  allLanguage: ModelDictionary[];
  tHeader: TableHeader;
  currentSubject: SubjectDto;
  currentFaculties: Faculty[];
  orderByPointFlag: number = 0;//if 1 desc grant ,2 desc contract,3 asc grant,4 asc contract
  orderByCountFlag: number = 0;//if 1 desc grant ,2 desc contract,3 asc grant,4 asc contract
  arrowByPointClass: string ="arrow-up arrow-position-up arrow-up-grand";//default
  arrowByCountClass: string = "arrow-up arrow-position-up arrow-up-grand";//default
  grantPoint: boolean ;
  grantCount: boolean ;
  contractPoint: boolean;
  contractCount: boolean;
  constructor(activateRoute: ActivatedRoute, private http: HttpClient, private languageProvider: LanguageProvider) {
    this.id = activateRoute.snapshot.params['id'];
    this.getUniversity();
    this.tHeader = new TableHeader();
    this.tHeader.setTableHeader(languageProvider.getLanguage());
    this.currentSubject = new SubjectDto();

  }

  get currentLanguage(): string {
    return this.languageProvider.getLanguage();
  }

  getUniversity() {
   
    this.http.get<University>(url + '/' + this.id).subscribe(u => {
      this.currentUniversity = u;
      this.retriveEducationType();
      this.retriveLanguages();
      this.currentSubject.educationType = this.allEducationType[0];
      this.currentSubject.language = this.allLanguage[0];
      this.buildTable();
    });

  }

  get tableHeader(): TableHeader {
    return this.tHeader;
  }


  get university():University {
    return this.currentUniversity;
  }

  get faculties(): Faculty[] {
    return this.currentFaculties;
  }

  removeHttpUrl(url: string): string {
    if (url === null || url === undefined) return null;
    let x = url.replace("http://","");
    return x;
  }

  createSubject(s: SubjectMap):string {
    let first = ModelDictionary.createModelDictionaryBySubject(s.firstSubject);
    let second = ModelDictionary.createModelDictionaryBySubject(s.secondSubject);
    let third = ModelDictionary.createModelDictionaryBySubject(s.thirdSubject);
    if (this.currentLanguage == "ru")
      return `${first.ruVersion}, ${second.ruVersion}, ${third.ruVersion}`;
    return `${first.uzVersion}, ${second.uzVersion}, ${third.uzVersion}`;
   
  }


  selectEducationType(e:ModelDictionary) {
    this.currentSubject.educationType = e;
    if (this.canBuild()) {
      this.buildTable();
    }
  }
  selectLanguage(l: ModelDictionary) {
    this.currentSubject.language = l;
    if (this.canBuild()) {
      this.buildTable();
    }
  }
  get eduTypes():ModelDictionary[] {
    return this.allEducationType;
  }
  get languages(): ModelDictionary[] {
    return this.allLanguage;
  }


  retriveEducationType() {
    this.allEducationType = RetriveService.retriveEducationType(this.currentUniversity.faculties);
  }
  retriveLanguages() {
    this.allLanguage = RetriveService.retriveLanguages(this.currentUniversity.faculties);
  }
  canBuild(): boolean {
    return this.currentSubject.isPropertyFilled();
  }

  buildTable() {

    let edutype = this.currentSubject.educationType.code;
    let lang = this.currentSubject.language.code;
    let result: Faculty[] = [];
    this.currentUniversity.faculties.forEach(function (value) {

      if (value.educationType == edutype && value.language == lang) {
        result.push(value);
      }

    });
    this.currentFaculties = result;
  }

  isThisLanguage(id: number): boolean {

    if (id == 0) return false;

    if (this.currentSubject.language === undefined || this.currentSubject.language === null) return false;

    return this.currentSubject.language.code == id;
  }
  isThisEducationType(id: number): boolean {
    if (id == 0) return false;

    if (this.currentSubject.educationType === undefined || this.currentSubject.educationType === null) return false;

    return this.currentSubject.educationType.code == id;
  }


  orderByPoint() {
    this.orderByPointFlag +=1;
    if (this.orderByPointFlag == 1) {
      this.currentFaculties = this.currentFaculties.sort((a, b) => (a.grantPass < b.grantPass) ? 1 : -1);
      this.arrowByPointClass = "arrow-up arrow-position-up arrow-up-grand";

      this.grantPoint = true;
      this.contractPoint = false;

    } else if (this.orderByPointFlag == 2) {
      this.currentFaculties = this.currentFaculties.sort((a, b) => (a.grantPass > b.grant) ? 1 : -1);
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


}
