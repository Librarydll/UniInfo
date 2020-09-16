import { Component } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { University } from '../../models/university.model';
import { ModelDictionary } from '../../models/modelDictionary.model';
import { RetriveService } from '../../services/retriveService';
import { TableHeader } from '../../models/tableHeader';
import { Faculty } from '../../models/faculty.model';
import { Subject, SubjectDto } from '../../models/subject.model';

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
  constructor(private activateRoute: ActivatedRoute, private http: HttpClient) {
    this.id = activateRoute.snapshot.params['id'];
    this.getUniversity();
    this.tHeader = new TableHeader();
    this.tHeader.setTableHeader();
    this.currentSubject = new SubjectDto();
  }

  getUniversity() {
   
    this.http.get<University>(url + '/' + this.id).subscribe(u => {
      this.currentUniversity = u;
      this.retriveEducationType();
      this.retriveLanguages();
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
