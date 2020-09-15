import { NgModule } from "@angular/core";
import { Repository } from "./repository";
import { HttpClientModule } from '@angular/common/http';
import { MessageService } from './messageService';

@NgModule({
    imports: [HttpClientModule],
  providers: [Repository,MessageService]
})
export class ModelModule { }
