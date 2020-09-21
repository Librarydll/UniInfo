import { NgModule } from "@angular/core";
import { Repository } from "./repository";
import { HttpClientModule } from '@angular/common/http';
import { MessageService } from './messageService';
import { Style } from './style';

@NgModule({
  imports: [HttpClientModule],
  providers: [Repository,MessageService,Style]
})
export class ModelModule { }
