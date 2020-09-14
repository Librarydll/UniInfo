import { Component } from "@angular/core";
import { Repository } from '../models/repository';
import { Subject } from '../models/subject.model';
import { ModelDictionary } from '../models/modelDictionary.model';


@Component({
  selector: "subject-filter",
  templateUrl: "subjectFilter.component.html",
  styleUrls:["./subjectFilter.component.css"]
})
export class SubjectFilterComponent{
  order: number=0;
  constructor(private repo: Repository) { }

  get subjects(): Subject[] {
    return this.repo.subjectNames;
  }

  get initialSubjects(): ModelDictionary[] {
    return this.repo.filteredSubjects;
  }

  selectSubject(sub: ModelDictionary) {
    this.order += 1;
    this.repo.filterSubject(this.order, sub);
  }

  getFaculties() {
    this.repo.getFaculties();
  }
  get currentSubject():Subject{
    return this.repo.currentSubject;
  }

  get educationTypes(): ModelDictionary[] {
    return this.repo.allEducationType;
  }
  get languages(): ModelDictionary[] {
    return this.repo.allLanguage;
  }

  clear() {
    this.order = 0;
    this.repo.currentSubject.clear();
    this.repo.allEducationType = null;
    this.repo.allLanguage = null;
    this.repo.filterSubject();
  }
}
