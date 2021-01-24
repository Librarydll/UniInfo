import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, Type } from '@angular/core';
import { Observable } from 'rxjs';
import { Quiz, QuizAnswer } from './quiz.model';
import { Subject } from './subject.model';

type shuffleQuizMetadata = {
  rowAffectedCount: number
}

const quizUrl = '/api/quiz';
@Injectable()
export class QuizService {
  public questionsPerSubject: number = 30;

  quizzes: Quiz[];
  quizResult: QuizAnswer;
  constructor(private http:HttpClient) {

  }

  shuffleQuizes(): Observable<shuffleQuizMetadata> {
   return this.http.get<shuffleQuizMetadata>(quizUrl + `/shuffleQuizes`)   
  }


  getQuizzes(subject: Subject, lang: number)  {
    let url = quizUrl + `?firstSubject=${subject.firstSubject.code}&secondSubject=${subject.secondSubject.code}&language=${lang}`;
    this.http.get<Quiz[]>(url).subscribe(q =>
      this.quizzes = q
      );

  }

  createQuiz(quiz: Quiz):Observable<boolean> {

    return this.http.post<boolean>(quizUrl ,quiz);
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
      .slice(0, this.questionsPerSubject)
      .map(x => x);
  }
  get secondSubjectQuestions(): Quiz[] {
    if (!this.quizzes) return null;

    return this.quizzes
      .slice(this.questionsPerSubject, 60)
      .map(x => x);
  }
  clear() {
    this.quizResult = null;
    this.quizzes = null;
  }
}


