import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UniversityListComponent } from './components/universityList/universityList.component';
import { AppListComponent } from './components/appList.component';
import { AppSingleComponent } from './components/appSingle.component';
import { QuizzesComponent } from './components/quiz/Quizzes.component';


const routes: Routes = [
  { path: "admin", loadChildren: () => import("./admin/admin.module").then(module => module.AdminModule) }, 
  { path: 'UniversityFilter', component: AppListComponent },
  { path: 'UniversityList/University/:id', component: AppSingleComponent },
  { path: 'UniversityList', component: UniversityListComponent },
  { path: 'Quiz', component: QuizzesComponent },
  { path: "", redirectTo: '/',pathMatch:"full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[]
})
export class AppRoutingModule { }

