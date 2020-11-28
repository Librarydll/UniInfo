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
  canBuild: boolean = false;
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
  selectLanguage(n: number) {
    this.repo.currentSubject.language = new ModelDictionary(null,null,n);
  }


  clear() {
    this.order = 0;
    this.repo.currentSubject.clear();
    this.repo.filterSubject();
    this.messageService.clear();
    this.canBuild = false;
  }

  beginTest() {
    let langNumber = this.languageProvider.getLanguage() == "uz" ? 1 : 2;
    this.quizService.getQuizzes(this.repo.currentSubject, langNumber);
    this.canBuild = true;
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
  }
  getUniversities() {
    this.repo.getUniversitiesByPassValue(this.quizResult.totalPoints);
  }

  getQuizResult(q:QuizAnswer) {
    this.quizResult = q;
  }
}
