import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubjectFilterComponent } from './structure/subjectFilter.component';
import { UniversityListComponent } from './structure/universityList.component';
import { StructureComponent } from './structure/structure.component';


const routes: Routes = [
  { path: 'UniversityFilter', component: StructureComponent },
  { path: 'UniversityList', component: UniversityListComponent },
  { path: "", redirectTo: '/',pathMatch:"full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
