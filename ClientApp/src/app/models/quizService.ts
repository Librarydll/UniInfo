import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Quiz, QuizAnswer } from './quiz.model';
import { Subject } from './subject.model';

const quizUrl = '/api/quiz';

@Injectable()
export class QuizService {

  quizzes: Quiz[];
  quizResult: QuizAnswer;
  constructor(private http:HttpClient) {

  }


  getQuizzes(subject: Subject, lang: number)  {
    let url = quizUrl + `?firstSubject=${subject.firstSubject.code}&secondSubject=${subject.secondSubject.code}&language=${lang}`;
    this.http.get<Quiz[]>(url).subscribe(q =>
      this.quizzes = q
      );

  }


  calculateAnswer():QuizAnswer {
    let a1 = this.firstSubjectQuestions
      .filter(x => x.selectedAnswer != null)
      .filter(x => x.rightAnswer === x.selectedAnswer).length;
    let a2 = this.secondSubjectQuestions
      .filter(x => x.selectedAnswer != null)
      .filter(x => x.rightAnswer === x.selectedAnswer).length;

    let result = new QuizAnswer();
    result.firstSubjectRightAnswersCount = a1;
    result.secondSubjectRightAnswersCount = a2;
    this.quizResult = result;
    return this.quizResult;
  }

  get firstSubjectQuestions(): Quiz[] {
    if (!this.quizzes) return null;
    return this.quizzes
      .slice(0, 30)
      .map(x => x);
  }
  get secondSubjectQuestions(): Quiz[] {
    if (!this.quizzes) return null;

    return this.quizzes
      .slice(30, 60)
      .map(x => x);
  }
  clear() {
    this.quizResult = null;
    this.quizzes = null;
  }
}


