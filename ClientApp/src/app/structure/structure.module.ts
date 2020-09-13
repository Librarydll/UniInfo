import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { SubjectFilterComponent } from './subjectFilter.component';

@NgModule({
  declarations: [SubjectFilterComponent],
  imports: [BrowserModule],
  exports: [SubjectFilterComponent]
})
export class StructureModule {}
