import { Component } from "@angular/core";
import { MessageService } from '../../models/messageService';
import { ModelDictionary } from '../../models/modelDictionary.model';
import { QuizAnswer } from '../../models/quiz.model';
import { QuizService } from '../../models/quizService';
import { Repository } from '../../models/repository';
import { SubjectDto } from '../../models/subject.model';
import { LanguageProvider } from '../../services/languageProvider';



@Component({
  selector: "quiz",
  templateUrl: "quizzes.component.html"
})
export class QuizzesComponent {

  
  isQuizEnded: boolean = false;
  order: number = 0;
  canBuildQuiz: boolean = false;
  canBuildTable: boolean = false;
  quizResult: QuizAnswer;
  constructor(private repo: Repository,
    private messageService: MessageService,
    private languageProvider: LanguageProvider,
    private quizService: QuizService) {
     repo.getSubjectNames();
  }

  get currentLanguage(): string {
    return this.languageProvider.getLanguage();
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
  get currentSubject(): SubjectDto {
    return this.repo.currentSubject;
  }

  isThisLanguage(id: number): boolean {

    if (id == 0) return false;

    if (!this.currentSubject.language) return false;

    return this.currentSubject.language.code == id;
  }

  isThisEducationType(id: number): boolean {
    if (id == 0) return false;

    if (this.currentSubject.educationType === undefined || this.currentSubject.educationType === null) return false;

    return this.currentSubject.educationType.code == id;
  }

  selectLanguage(n: number) {
    this.repo.currentSubject.language = new ModelDictionary(null,null,n);
  }
  selectEducationType(edu: ModelDictionary) {
    this.repo.currentSubject.educationType = edu;
    if (this.repo.currentSubject.isPropertyFilled()) {
      this.buildTable();
    }
  }
  selectLanguage2(l: ModelDictionary) {
    this.repo.currentSubject.language = l;
    if (this.repo.currentSubject.isPropertyFilled()) {
      this.buildTable();
    }
  }
  clear() {
    this.order = 0;
    this.repo.currentSubject.clear();
    this.repo.filterSubject();
    this.messageService.clear();
    this.canBuildQuiz = false;
    this.canBuildTable =false;
  }

  beginTest() {
    let langNumber = this.repo.currentSubject.language.code;
    this.quizService.getQuizzes(this.repo.currentSubject, langNumber);
    this.canBuildQuiz = true;
  }

  buildTable() {
    this.messageService.build();
  }

  canBegin() {
    if (!this.currentSubject.language) return false;
    return true;
  }
  getStatus() {
    this.isQuizEnded = true;
  }
  retry() {
    this.clear();
    this.quizService.clear();
    this.isQuizEnded = false;
    this.canBuildTable = false;
  }
   getUniversities() {
     this.repo.getUniversitiesByPassValue(this.quizResult.totalPoints);
     this.canBuildTable = true;
  }

  getQuizResult(q:QuizAnswer) {
    this.quizResult = q;
  }

  get educationTypes(): ModelDictionary[] {
    return this.repo.allEducationType;
  }
  get languages(): ModelDictionary[] {
    return this.repo.allLanguage;
  }

  get hasResult(): boolean {
     return this.canBuildTable && !this.repo.buildFilter.hasData;
  }
}
