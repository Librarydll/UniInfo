import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { SubjectFilterComponent } from './subjectFilter.component';
import { TableBuilderComponent } from './tableBuilder.component';
import { StructureComponent } from './structure.component';

@NgModule({
  declarations: [SubjectFilterComponent, TableBuilderComponent, StructureComponent],
  imports: [BrowserModule],
  exports: [StructureComponent]
})
export class StructureModule {}
