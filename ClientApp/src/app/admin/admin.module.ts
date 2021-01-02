import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../models/auth.guard';
import { AuthService } from '../models/auth.service';
import { QuizService } from '../models/quizService';
import { Repository } from '../models/repository';
import { AdminComponent } from './admin.component';
import { AuthComponent } from './auth.component';

const routes: Routes = [
  { path: "", component: AuthComponent },
  { path: "main", component: AdminComponent,canActivate:[AuthGuard] }
 ];


@NgModule({
  imports: [RouterModule, CommonModule, FormsModule, RouterModule.forChild(routes), HttpClientModule],
  providers: [AuthService, Repository, QuizService,AuthGuard],
  declarations: [AuthComponent, AdminComponent]
})
export class AdminModule {

}
