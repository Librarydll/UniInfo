import { Component,OnInit } from "@angular/core";
import { Repository } from '../../models/repository';
import { QuizService } from '../../models/quizService';
import { Quiz } from '../../models/quiz.model';


@Component({
  selector: "quiz-view",
  templateUrl :"quizView.component.html"

})
export class QuizViewComponent implements OnInit {
   
  constructor(private repo: Repository, private quizService: QuizService) {

  }
  ngOnInit(): void {

  }

  get quizzes():Quiz[] {
    return this.quizService.quizzes;
  }

  buildTable() {

  }

  get f(): Quiz {
    return this.quizzes[0];
  }
}
