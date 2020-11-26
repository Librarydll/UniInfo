import { NgModule } from "@angular/core";
import { Repository } from "./repository";
import { HttpClientModule } from '@angular/common/http';
import { MessageService } from './messageService';
import { Style } from './style';
import { QuizService } from './quizService';

@NgModule({
  imports: [HttpClientModule],
  providers: [Repository,MessageService,Style,QuizService]
})
export class ModelModule { }
