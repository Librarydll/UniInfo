import { Component,OnInit, Pipe, PipeTransform } from "@angular/core";
import { Repository } from '../../models/repository';
import { QuizService } from '../../models/quizService';
import { Quiz } from '../../models/quiz.model';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: "quiz-view",
  templateUrl :"quizView.component.html"

})
export class QuizViewComponent {
   
  constructor(private repo: Repository, private quizService: QuizService, private sanitizer: DomSanitizer) {
  }

  get quizzes():Quiz[] {
    return this.quizService.quizzes;
  }

  get firstSubjectQuestions(): Quiz[] {
    return this.quizService.quizzes
      .slice(0, 30)
      .map(x => x);
  }
  get secondSubjectQuestions(): Quiz[] {
    return this.quizService.quizzes
      .slice(30, 60)
      .map(x => x);
  }

}



@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }
  transform(value) {
    return this.sanitizer.bypassSecurityTrustHtml(value);
  }
}
