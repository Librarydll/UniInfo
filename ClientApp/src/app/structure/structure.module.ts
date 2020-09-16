import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { SubjectFilterComponent } from './subjectFilter.component';
import { TableBuilderComponent } from './tableBuilder.component';
import { StructureComponent } from './structure.component';
import { UniversityListComponent } from './universityList.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SubjectFilterComponent, TableBuilderComponent, StructureComponent,UniversityListComponent],
  imports: [BrowserModule, FormsModule],
  exports: [StructureComponent]
})
export class StructureModule {}
