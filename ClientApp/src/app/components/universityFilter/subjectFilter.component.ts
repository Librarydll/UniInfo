import { Component } from "@angular/core";
import { Repository } from '../../models/repository';
import { Subject, SubjectDto } from '../../models/subject.model';
import { ModelDictionary } from '../../models/modelDictionary.model';
import { MessageService } from '../../models/messageService';
import { LanguageProvider } from '../../services/languageProvider';
import { Style } from '../../models/style';


@Component({
  selector: "subject-filter",
  templateUrl: "subjectFilter.component.html"
})
export class SubjectFilterComponent{

  order: number = 0;
  constructor(public repo: Repository, private messageService: MessageService, private languageProvider: LanguageProvider,private style:Style) {
    style.uNameDisplay = '';
    style.subjectDisplay = 'none';
    style.canOrder = false;
    repo.getSubjectNames();
  }

  get currentLanguage():string {
    return this.languageProvider.getLanguage();
  }

  get initialSubjects(): ModelDictionary[] {
    return this.repo.filteredSubjects;
  }

  selectSubject(sub: ModelDictionary) {
    this.order += 1;
    this.repo.filterSubject(this.order, sub);

    if (this.order == 2) this.repo.getFaculties();
  }

  get currentSubject():SubjectDto{
    return this.repo.currentSubject;
  }

  get educationTypes(): ModelDictionary[] {
    return this.repo.allEducationType;
  }
  get languages(): ModelDictionary[] {
    return this.repo.allLanguage;
  }

  selectEducationType(edu: ModelDictionary) {
    this.repo.currentSubject.educationType = edu;
    if (this.canBuild()) {
      this.buildTable();
    }
  }
  selectLanguage(l: ModelDictionary) {
    this.repo.currentSubject.language = l;
    if (this.canBuild()) {
      this.buildTable();
    }
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

  clear() {
    this.order = 0;
    this.repo.currentSubject.clear();
    this.repo.allEducationType = null;
    this.repo.allLanguage = null;
    this.repo.filterSubject();
    this.messageService.clear();
  }

  buildTable() {
    this.messageService.build();
  }

  canBuild():boolean {
    return this.repo.currentSubject.isPropertyFilled();
  }
}
