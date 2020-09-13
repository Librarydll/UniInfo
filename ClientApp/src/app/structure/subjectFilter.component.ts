import { Component } from "@angular/core";
import { Repository } from '../models/repository';
import { Subject } from '../models/subject.model';


@Component({
  selector: "subject-filter",
  templateUrl: "subjectFilter.component.html",
  styleUrls:["./subjectFilter.component.css"]
})
export class SubjectFilterComponent{

  constructor(private repo: Repository) { }

  get subjects(): Subject[] {
    return this.repo.subjectNames;
  }

  get initialSubjects(): Subject[] {
    return this.repo.distinctedSubjects;
  }


}
