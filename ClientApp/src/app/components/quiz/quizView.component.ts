import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Repository } from '../../models/repository';
import { QuizService } from '../../models/quizService';
import { Quiz, QuizAnswer } from '../../models/quiz.model';
import { Chart } from 'chart.js'
import { LanguageProvider } from '../../services/languageProvider';
import { ModelDictionary } from '../../models/modelDictionary.model';
import { delay } from 'rxjs/operators';


const rigth: ModelDictionary = new ModelDictionary("Правильные", "To'g'ri", 0);
const wrong: ModelDictionary = new ModelDictionary("Неправильные", "Noto'g'ri", 0);

@Component({
  selector: "quiz-view",
  templateUrl: "quizView.component.html"

})
export class QuizViewComponent {

  @Output() isQuizEndedOutput = new EventEmitter<boolean>();
  @Output() qResultOutput = new EventEmitter<QuizAnswer>();
  isQuizEnded: boolean = false;
  firstChart = [];
  secondChart = [];
  isFirstAriaSelected: boolean = true;
  constructor(private repo: Repository,
    private quizService: QuizService,
    private lang: LanguageProvider) {
  }

  get quizzes(): Quiz[] {
    return this.quizService.quizzes;
  }

  get firstSubjectQuestions(): Quiz[] {
    return this.quizService.firstSubjectQuestions;
  }
  get secondSubjectQuestions(): Quiz[] {
    return this.quizService.secondSubjectQuestions;
  }

  onSelectionChange(quiz: Quiz, questionNumber: number, answerNumberPlace: number) {

    if (answerNumberPlace == 1) {
      quiz.selectedAnswer = quiz.firstAnswer;
    }
    else if (answerNumberPlace == 2) {
      quiz.selectedAnswer = quiz.secondAnswer;

    }
    else if (answerNumberPlace == 3) {
      quiz.selectedAnswer = quiz.thirdAnswer;

    }
    else if (answerNumberPlace == 4) {
      quiz.selectedAnswer = quiz.fourthAnswer;
    }
    this.fillBlank(questionNumber + 1);
  }

  fillBlank(questionNumber: number) {
    let emptyBlank = document.getElementById(`blank_${questionNumber}`);
    if (emptyBlank.classList.contains("checked-question")) return;
    emptyBlank.classList.remove("unchecked-question");
    emptyBlank.classList.add("checked-question");
  }


  clearSelectedAnswers(quiz: Quiz, questionNumber: number) {
    quiz.selectedAnswer = null;
    let checkBoxes = document.querySelectorAll(`#d_${questionNumber} input`);
    checkBoxes.forEach(checkBox => {
      checkBox.setAttribute("checked", "checked");
      checkBox.removeAttribute("checked");
    });
    this.emptyBlank(questionNumber + 1);
  }

  emptyBlank(questionNumber: number) {
    let fullBlank = document.getElementById(`blank_${questionNumber}`);
    if (fullBlank.classList.contains("unchecked-question")) return;

    fullBlank.classList.remove("checked-question");
    fullBlank.classList.add("unchecked-question");
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
          text: l == "uz" ? this.repo.currentSubject.firstSubject.uzVersion : this.repo.currentSubject.firstSubject.ruVersion,
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
            data: [this.quizService.quizResult.secondSubjectRightAnswersCount, this.quizService.questionsPerSubject - this.quizService.quizResult.secondSubjectRightAnswersCount],
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

  get result(): QuizAnswer {
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

  closeQuiz() {
    this.quizService.calculateAnswer();
    this.isQuizEnded = true;
    this.generateChart();
    this.isQuizEndedOutput.emit(true);
    this.qResultOutput.emit(this.quizService.quizResult);
  }


  goToAnchor(id: string) {
  //  this.changeAriaSelected();
    let element = document.getElementById("q_" + id);
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  changeAriaSelected() {
    let firstAria = document.getElementById("nav-first-tab");
    let secondAria = document.getElementById("nav-second-tab");
    if (this.isFirstAriaSelected) {
      secondAria.click();
    }
    else {
      firstAria.click();
    }

  }

  ariaSelected(n: number) {

    if (n == 1) {
      this.isFirstAriaSelected = true;
    }
    if (n == 2) {
      this.isFirstAriaSelected = false;
    }
  }
}




