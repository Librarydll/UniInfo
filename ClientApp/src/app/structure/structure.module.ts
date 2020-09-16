import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { SubjectFilterComponent } from '../components/universityFilter/subjectFilter.component';
import { UniversityListComponent } from '../components/universityList/universityList.component';
import { FormsModule } from '@angular/forms';
import { SingleUniversityComponent } from '../components/singleUniversity/singleUniversity.component';
import { TableBuilderComponent } from '../components/universityList/tableBuilder.component';
import { AppListComponent } from '../components/appList.component';

@NgModule({
  declarations: [SubjectFilterComponent, TableBuilderComponent, AppListComponent, UniversityListComponent, SingleUniversityComponent],
  imports: [BrowserModule, FormsModule],
  exports: [AppListComponent]
})
export class StructureModule {}
