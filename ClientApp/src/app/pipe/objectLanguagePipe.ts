import { Pipe, PipeTransform } from '@angular/core';
import { ModelDictionary } from '../models/modelDictionary.model';
import { LanguageProvider } from '../services/languageProvider';

@Pipe({name :"validName" })
export class ObjectLanguagePipe implements PipeTransform{
  private l: string;
  constructor(private lang: LanguageProvider) { this.l = lang.getLanguage(); }

  transform(value: ModelDictionary) {
    if (!value) return null;
    if (this.l == "uz") return value.uzVersion;
    return value.ruVersion;
  }

}


