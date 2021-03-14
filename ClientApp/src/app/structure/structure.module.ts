import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { SubjectFilterComponent } from '../components/universityFilter/subjectFilter.component';
import { UniversityListComponent } from '../components/universityList/universityList.component';
import { FormsModule } from '@angular/forms';
import { SingleUniversityComponent } from '../components/singleUniversity/singleUniversity.component';
import { TableBuilderComponent } from '../components/tblBuilder/tableBuilder.component';
import { AppListComponent } from '../components/appList.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { AppSingleComponent } from '../components/appSingle.component';
import { QuizzesComponent } from '../components/quiz/Quizzes.component';
import { QuizViewComponent,  } from '../components/quiz/quizView.component';
import { ObjectLanguagePipe } from '../pipe/objectLanguagePipe';
import { TimerComponent } from '../components/timer/timer.component';
import { SafePipe } from '../pipe/safePipe';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [SubjectFilterComponent,
    TableBuilderComponent,
    AppListComponent,
    UniversityListComponent,
    SingleUniversityComponent,
    AppSingleComponent,
    QuizzesComponent,
    QuizViewComponent, SafePipe, ObjectLanguagePipe, TimerComponent],
  imports: [BrowserModule ,FormsModule,TranslateModule.forRoot({
    loader: {
      provide: TranslateLoader,
      useFactory: HttpLoaderFactory,
      deps: [HttpClient]
    },
    isolate: true,
  })],
  exports: [AppListComponent, SafePipe ]
})
export class StructureModule {}
