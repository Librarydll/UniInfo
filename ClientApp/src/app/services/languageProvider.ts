import { Injectable } from "@angular/core";
import { TranslateService } from '@ngx-translate/core';

const defaultLang :string= "uz";

Injectable()
export class LanguageProvider {
  private lang: string;
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang(defaultLang);
    this.lang = defaultLang;
  }


  setLanguage(l: string) {

    this.lang = this.createLanguage(l);
    this.translate.use(this.lang);
  }

  getLanguage():string {
    return this.lang;
  }

  createLanguage(l: string):string {
    if (l === null || l === undefined) {
      return defaultLang
    }

    if (l.includes("uz")) {
      return "uz";
    }
    return "ru";
  }
}
