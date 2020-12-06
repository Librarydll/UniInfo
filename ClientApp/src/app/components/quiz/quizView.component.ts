import { Component,EventEmitter, Output } from "@angular/core";
import { Repository } from '../../models/repository';
import { QuizService } from '../../models/quizService';
import { Quiz, QuizAnswer } from '../../models/quiz.model';
import { Chart } from 'chart.js'
import { LanguageProvider } from '../../services/languageProvider';
import { ModelDictionary } from '../../models/modelDictionary.model';


const rigth: ModelDictionary = new ModelDictionary("Правильные", "To'g'ri", 0);
const wrong: ModelDictionary = new ModelDictionary("Неправильные", "Noto'g'ri", 0);

@Component({
  selector: "quiz-view",
  templateUrl :"quizView.component.html"

})
export class QuizViewComponent {

  @Output() isQuizEndedOutput = new EventEmitter<boolean>();
  @Output() qResultOutput = new EventEmitter<QuizAnswer>();
  isQuizEnded: boolean = false;
  firstChart = [];
  secondChart = [];
  constructor(private repo: Repository, private quizService: QuizService, private lang: LanguageProvider) {
   
  }

  get quizzes():Quiz[] {
    return this.quizService.quizzes;
  }

  get firstSubjectQuestions(): Quiz[] {
    return this.quizService.firstSubjectQuestions;
  }
  get secondSubjectQuestions(): Quiz[] {
    return this.quizService.secondSubjectQuestions;
  }

  onSelectionChange(quiz: Quiz, n: number) {

    if (n == 1) {
      quiz.selectedAnswer = quiz.firstAnswer;
    }
    else if (n == 2) {
      quiz.selectedAnswer = quiz.secondAnswer;

    }
    else if (n == 3) {
      quiz.selectedAnswer = quiz.thirdAnswer;

    }
    else if (n == 4) {
      quiz.selectedAnswer = quiz.fourthAnswer;
    }
    else {
     // throw new argu(`onSelectionChange number must be 1<=x<=4,it is ${n}`)
    }
  }

  get result() : QuizAnswer {
    return this.quizService.quizResult;
  }

  finishQuiz() {
    if (confirm("Вы действительно хотите завершить тест ?")) {
      this.closeQuiz();
    } 
  }

  timeIsOverEvent($event) {
    this.closeQuiz();
  }
  
  generateChart() {

    let l = this.lang.getLanguage();
    let r = l == "uz" ? rigth.uzVersion : rigth.ruVersion;
    let w = l == "uz" ? wrong.uzVersion : wrong.ruVersion;
    this.firstChart = new Chart('canvas1', {
      type: 'pie',
        data: {
        datasets: [
        {
            data: [this.quizService.quizResult.firstSubjectRightAnswersCount, this.quizService.questionsPerSubject - this.quizService.quizResult.firstSubjectRightAnswersCount],
            backgroundColor: [
              "#17a2b8",
              "#03132b"
            ],
            fill:true
        }],
        labels: [
          r,
          w,
        ]

      },
      options: {
        title: {
          display: true,
          text: l=="uz" ? this.repo.currentSubject.firstSubject.uzVersion:this.repo.currentSubject.firstSubject.ruVersion,
          fontColor: "White",
          fontSize: 15

        },
        legend: {
          labels: {
            fontColor: "White",
            fontSize: 15
          }
        }
      }
    });
    this.secondChart = new Chart('canvas2', {
      type: 'pie',
      data: {
        datasets: [
          {
            data: [this.quizService.quizResult.secondSubjectRightAnswersCount, this.quizService.questionsPerSubject - this.quizService.quizResult.secondSubjectRightAnswersCount ],
            backgroundColor: [
              "#17a2b8",
              "#03132b"
            ],
            fill: true
          }],
        labels: [
          r,
          w,
        ]

      },
      options: {
        title: {
          display: true,
          text: l == "uz" ? this.repo.currentSubject.secondSubject.uzVersion : this.repo.currentSubject.secondSubject.ruVersion,
          fontColor: "White",
          fontSize: 15

        },
        legend: {
          labels: {
            fontColor: "White",
            fontSize: 15
          }
        }
      }
    });
  }


  closeQuiz() {
    this.quizService.calculateAnswer();
    this.isQuizEnded = true;
    this.generateChart();
    this.isQuizEndedOutput.emit(true);
    this.qResultOutput.emit(this.quizService.quizResult);
  }
}




