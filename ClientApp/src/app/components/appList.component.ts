import { Component } from "@angular/core";
import { Title } from '@angular/platform-browser';
import { LanguageProvider } from '../services/languageProvider';


@Component({
  selector: "appList-component",
  templateUrl: "appList.component.html"
})
export class AppListComponent {

  constructor(private titleService: Title, private languageProvider: LanguageProvider) {
    let title=  languageProvider.getLanguage()=="uz"?"Oliygohni qidirish": "Поиск университетов"
    this.titleService.setTitle(title);
  }
}
