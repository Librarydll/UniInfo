import { Component } from '@angular/core';
import { Repository } from "./models/repository";
import { Subject } from './models/subject.model';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(translate: TranslateService) {
    translate.setDefaultLang("en");
    translate.use("en"); 
  }


}
