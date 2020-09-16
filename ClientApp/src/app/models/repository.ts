import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Subject, SubjectDto } from './subject.model';
import { ModelDictionary } from './modelDictionary.model';
import { FilterByFirstSubject, IFilter, FilterBySecondSubject, FilterByNoSubject } from '../strategy/filterStrategy';
import { Faculty, FacultyDto } from './faculty.model';
import { Filter } from './configClasses.repository';
import { University } from './university.model';

const universityUrl = "/api/university";
const facultyUrl = "/api/faculty";
const subjectyUrl = "/api/subject";

@Injectable()
export class Repository {
  currentSubject: SubjectDto;
  distinctedSubjects: Subject[];
  subjectNames: Subject[];
  filteredSubjects: ModelDictionary[];
  filterStrategy: IFilter;
  allEducationType: ModelDictionary[];
  allLanguage: ModelDictionary[];
  allRelatedFaculties: FacultyDto[];

  filter: Filter;
  universities: University[];

  constructor(private http: HttpClient) {
    this.currentSubject = new SubjectDto();
    this.getSubjectNames();
    this.filter = new Filter();
  }

    getUniversities(){
      let url = universityUrl;

      this.http.get<University[]>(url).subscribe(u => {
        this.universities = u;

      })
    }


    getSubjectNames() {
      let url = subjectyUrl;
        
      this.http.get<Subject[]>(url).subscribe(subj =>
      {
        this.subjectNames = subj;
        this.filterSubject();
      });

    }


  createDistinctedSubject() {
    this.distinctedSubjects = this.subjectNames.filter(
      (sub, i, array) => array.findIndex(x => x.firstSubject.code == sub.firstSubject.code) === i);
  }

  filterSubject(order: number = 0, model?: ModelDictionary) {
    
    if (order == 0) {//in initialize
      this.filterStrategy = new FilterByNoSubject();
      this.filteredSubjects = this.filterStrategy.filter(this.subjectNames, null);
      
    }
    if (order == 1) {//when select first subject
      this.currentSubject.firstSubject = model;
      this.filterStrategy = new FilterByFirstSubject();
      this.filteredSubjects = this.filterStrategy.filter(this.subjectNames,this.currentSubject);

    }
    if (order == 2) {//when select second subject
      this.currentSubject.secondSubject = model;
      this.filterStrategy = new FilterBySecondSubject();
      this.filteredSubjects = this.filterStrategy.filter(this.subjectNames, this.currentSubject);
    }
    if (order == 3) {//when select third subject
      this.currentSubject.thirdSubject = model;
      this.getFaculties();
    }
  }

  getFaculties() {
    let url =
      `${facultyUrl}?code1=${this.currentSubject.firstSubject.code}&code2=${this.currentSubject.secondSubject.code}&code3=${this.currentSubject.thirdSubject.code}`;

    this.http.get<FacultyDto[]>(url).subscribe(fac => {
      this.allRelatedFaculties = fac;
      this.retriveEducationType();
      this.retriveLanguages();
    });
  }

  retriveEducationType() {
    let z = this.allRelatedFaculties.filter((f, i, arr) => arr.findIndex(x => x.educationType == f.educationType) === i);
    this.allEducationType = z.map(x => ModelDictionary.createModelDictionaryByEductaionType(x.educationType));
  }
  retriveLanguages() {
    let z = this.allRelatedFaculties.filter((f, i, arr) => arr.findIndex(x => x.language == f.language) === i);
    this.allLanguage = z.map(x => ModelDictionary.createModelDictionaryByLanguage(x.language));
  }

}
