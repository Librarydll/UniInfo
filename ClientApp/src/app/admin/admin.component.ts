import { Component, OnInit } from "@angular/core";
import { NgForm } from '@angular/forms';
import { AuthService } from '../models/auth.service';
import { ModelDictionary } from '../models/modelDictionary.model';
import { Quiz } from '../models/quiz.model';
import { QuizService } from '../models/quizService';
import { Repository } from '../models/repository';
import { Subject } from '../models/subject.model';



@Component({
  templateUrl: "admin.component.html"
})
export class AdminComponent implements OnInit {
  affectedRowCount: number = 0;
  shuffle: boolean = false;
  canShuffle: boolean = true;
  created: boolean = false;
  currentSubject: ModelDictionary;
  quiz:Quiz
  constructor(private repo: Repository,private quizService:QuizService,private authService:AuthService) {
  }
  ngOnInit(): void {
    this.repo.getSubjectNames();
    this.reset();
   }

  get subjects():ModelDictionary[] {
    return this.repo.filteredSubjects;
  }

  selectSubject(s: ModelDictionary) {
    this.currentSubject = s;
    this.reset();
    this.quiz.subject = s.code;
    this.affectedRowCount = 0;

  }

  createQuiz(ngForm: NgForm) {

    if (ngForm.valid) {
      this.quizService.createQuiz(this.quiz).subscribe(x => {
        this.created = x
      });
    }
  }

  reset() {
    this.quiz = new Quiz();
    this.quiz.bothLanguages = false;
    this.quiz.language = 1;
    this.created = false;
    this.affectedRowCount = 0;

  }


  openShuffleQuizButton() {
    this.shuffle = true;
    this.currentSubject = null;
  }

  shuffleQuizes() {
    if (this.canShuffle) {
      this.canShuffle = false
      this.quizService.shuffleQuizes()
        .subscribe(x => {
          this.affectedRowCount = x.rowAffectedCount;
        });
      this.canShuffle = true
    }
      
  }

  logout() {
    this.authService.logout();
  }
}
