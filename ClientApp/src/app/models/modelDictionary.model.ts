import { Subject } from './subject.model';

export class ModelDictionary {
  
    static langDict: { [id: number]: ModelDictionary } = {
    [1]: ModelDictionary.createModelDictionary("Узбекский","",1),
    [2]: ModelDictionary.createModelDictionary("Русский","",2),
    [3]: ModelDictionary.createModelDictionary("Каракалпакский","",3),
    [4]: ModelDictionary.createModelDictionary("Таджикский","",4),
    [5]: ModelDictionary.createModelDictionary("Казакский","",5),
    [6]: ModelDictionary.createModelDictionary("Туркменский","",6),
    [7]: ModelDictionary.createModelDictionary("Киргизкий","",7),
    [8]: ModelDictionary.createModelDictionary("Английский","",8),
  }
  static eduDict: { [id: number]: ModelDictionary } = {
    [1]: ModelDictionary.createModelDictionary("Дневной", "", 1),
    [2]: ModelDictionary.createModelDictionary("Заочно", "", 2),
    [3]: ModelDictionary.createModelDictionary("Вечерний", "", 3),
  }

  constructor(public ruVersion?: string, public uzVersion?: string, public code: number = 0) { }


  static createModelDictionary(str1: string, str2: string, code: number): ModelDictionary {
    return new ModelDictionary(str1, str2, code);
  }
  static createModelDictionaryByLanguage(lang: number): ModelDictionary {
    return ModelDictionary.langDict[lang];
  }
  static createModelDictionaryByEductaionType(edu: number): ModelDictionary {
    return ModelDictionary.eduDict[edu];
  }
}
