import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Quiz } from './quiz.model';
import { Subject } from './subject.model';

const quizUrl = '/api/quiz';

@Injectable()
export class QuizService {

  constructor(private http:HttpClient) {

  }


  getQuizzes(subject: Subject, lang: number) :Observable<Quiz[]> {
    let url = quizUrl + `?firstSubject=${subject.firstSubject.code}&secondSubject=${subject.secondSubject.code}&language=${lang}`;
    return this.http.get<Quiz[]>(url);

  }


}
