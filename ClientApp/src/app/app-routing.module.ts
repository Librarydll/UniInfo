import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UniversityListComponent } from './components/universityList/universityList.component';
import { SingleUniversityComponent } from './components/singleUniversity/singleUniversity.component';
import { AppListComponent } from './components/appList.component';
import { AppSingleComponent } from './components/appSingle.component';


const routes: Routes = [
  { path: 'UniversityFilter', component: AppListComponent },
  { path: 'UniversityList/University/:id', component: AppSingleComponent },
  { path: 'UniversityList', component: UniversityListComponent },
  { path: "", redirectTo: '/',pathMatch:"full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

