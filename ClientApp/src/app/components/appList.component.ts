import { Component } from "@angular/core";
import { Meta, Title } from '@angular/platform-browser';
import { LanguageProvider } from '../services/languageProvider';
import *  as  metaUz from '../../assets/meta/metaUz.json';
import *  as  metaRu from '../../assets/meta/metaRu.json';

@Component({
  selector: "appList-component",
  templateUrl: "appList.component.html"
})
export class AppListComponent {

  constructor(private titleService: Title, private languageProvider: LanguageProvider,private metaService:Meta) {
    let title=  languageProvider.getLanguage()=="uz"?"Oliygohni qidirish": "Поиск университетов"
    this.titleService.setTitle(title);
    this.initializeMetaTags(title);
  }

  initializeMetaTags(title: string) {
    this.metaService.addTags([
      { name: 'keywords', content: this.languageProvider.getLanguage() == "uz" ? metaUz.universityFilter : metaRu.universityFilter },
      { name: 'description', content: title },
    ]);
  }
}
