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



}
