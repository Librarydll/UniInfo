import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubjectFilterComponent } from './structure/subjectFilter.component';


const routes: Routes = [
  { path: 'UniversityFilter', component: SubjectFilterComponent },
  { path: "", redirectTo: '/',pathMatch:"full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
