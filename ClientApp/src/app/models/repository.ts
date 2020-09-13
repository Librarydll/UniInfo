import { Product } from "./product.model";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Filter } from "./configClasses.repository";
import { Subject } from './subject.model';

const universityUrl = "/api/university";

@Injectable()
export class Repository {
  currentSubject: Subject;
  distinctedSubjects: Subject[];
  subjectNames: Subject[];

    constructor(private http: HttpClient) {
       // this.filter.category = "soccer";
      //  this.filter.related = true;
      this.getSubjectNames();
     // this.createDistinctedSubject();
    }


    getSubjectNames() {
      let url = universityUrl;
        
      this.http.get<Subject[]>(url).subscribe(subj =>
      {
        this.subjectNames = subj;
        this.createDistinctedSubject();
      });

    }


  createDistinctedSubject() {
    this.distinctedSubjects = this.subjectNames.filter(
      (sub, i, array) => array.findIndex(x => x.firstSubject.ruVersion == sub.firstSubject.ruVersion) === i);
  }
}
