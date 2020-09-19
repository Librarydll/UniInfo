
export class ModelDictionary {
  static location: { [id: number]: ModelDictionary } = { 
    [1]: ModelDictionary.createModelDictionary("Андижанская область", "Andijon viloyati", 1),
    [2]: ModelDictionary.createModelDictionary("Бухарская область", "Buxoro viloyati", 2),
    [3]: ModelDictionary.createModelDictionary("Сурхандарьинская область", "Surxondaryo viloyati", 3),
    [4]: ModelDictionary.createModelDictionary("Ферганская область", "Farg‘ona viloyati", 4),
    [5]: ModelDictionary.createModelDictionary("Сырдарьинская область", "Sirdaryo viloyati", 5),
    [6]: ModelDictionary.createModelDictionary("Джизакская область", "Jizzax viloyati", 6),
    [7]: ModelDictionary.createModelDictionary("Наманганская область", "Namangan viloyati", 7),
    [8]: ModelDictionary.createModelDictionary("Навоийская область", "Navoiy viloyati", 8),
    [9]: ModelDictionary.createModelDictionary("Республика Каракалпакстан", "Qoraqalpog‘iston Respublikasi", 9),
    [10]: ModelDictionary.createModelDictionary("Кашкадарьинская область", "Qashqadaryo viloyati", 10),
    [11]: ModelDictionary.createModelDictionary("Самаркандская область", "Samarqand viloyati", 11),
    [12]: ModelDictionary.createModelDictionary("Ташкентская область", "Toshkent viloyati", 12),
    [13]: ModelDictionary.createModelDictionary("Город Ташкент", "Toshkent shahar", 13),
    [14]: ModelDictionary.createModelDictionary("Хорезмская область", "Xorazm viloyati", 14),
  }
  static langDict: { [id: number]: ModelDictionary } = {
    [1]: ModelDictionary.createModelDictionary("Узбекский","O`zbekcha",1),
    [2]: ModelDictionary.createModelDictionary("Русский","Ruscha",2),
    [3]: ModelDictionary.createModelDictionary("Каракалпакский","Qoraqalpoqcha",3),
    [4]: ModelDictionary.createModelDictionary("Таджикский","Tojikcha",4),
    [5]: ModelDictionary.createModelDictionary("Казакский","Qozoqcha",5),
    [6]: ModelDictionary.createModelDictionary("Туркменский","Turkmancha",6),
    [7]: ModelDictionary.createModelDictionary("Киргизкий","Qirgizcha",7),
    [8]: ModelDictionary.createModelDictionary("Английский","Ingliz",8),
  }
  static eduDict: { [id: number]: ModelDictionary } = {
    [1]: ModelDictionary.createModelDictionary("Дневной", "Kunduzgi", 1),
    [2]: ModelDictionary.createModelDictionary("Заочно", "Sirtqi", 2),
    [3]: ModelDictionary.createModelDictionary("Вечерний", "Kechgi", 3),
  }

  static subjectDict: { [id: number]: ModelDictionary } = {
    [1]: ModelDictionary.createModelDictionary("Английский язык", "Ingliz tili", 1),
    [2]: ModelDictionary.createModelDictionary("Биология", "Biologiya", 2),
    [3]: ModelDictionary.createModelDictionary("География", "Geografiya", 3),
    [4]: ModelDictionary.createModelDictionary("История", "Tarix", 4),
    [5]: ModelDictionary.createModelDictionary("Информатика", "Informatika", 5),
    [6]: ModelDictionary.createModelDictionary("Казакский язык", "Qozoq tili va adabiyoti", 6),
    [7]: ModelDictionary.createModelDictionary("Каракалпакский язык", "Qoraqolpoq tili va adabiyoti", 7),
    [8]: ModelDictionary.createModelDictionary("Киргизкий язык", "Qirg`iz tili", 8),
    [9]: ModelDictionary.createModelDictionary("Математика", "Matematika", 9),
    [10]: ModelDictionary.createModelDictionary("Немецкий язык", "Nemis tili", 10),
    [11]: ModelDictionary.createModelDictionary("Русский язык и литература", "Rus tili va adabiyoti", 11),
    [12]: ModelDictionary.createModelDictionary("Таджиский язык", "Tojik tili", 12),
    [13]: ModelDictionary.createModelDictionary("Творческий (профессиональный)", "Ijodiy (kasbiy)", 13),
    [14]: ModelDictionary.createModelDictionary("Туркманский язык", "Turkman tili", 14),
    [15]: ModelDictionary.createModelDictionary("Узбекский язык и литература", "Ona tili va adabiyoti", 15),
    [16]: ModelDictionary.createModelDictionary("Физика", "Fizika", 16),
    [17]: ModelDictionary.createModelDictionary("Французкий язык", "Fransuz tili", 17),
    [18]: ModelDictionary.createModelDictionary("Химия", "Kimyo", 18),
    [19]: ModelDictionary.createModelDictionary("Логика", "Mantiq", 19),
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

  static createModelDictionaryByLocation(location:number): ModelDictionary {
    return ModelDictionary.location[location];
  }

  static createModelDictionaryBySubject(subj: number) {
    return ModelDictionary.subjectDict[subj];
  }
}


export class ModelDictionaryUniversity extends ModelDictionary {
  public count: number;
  public id: number;
  public static createModelDictionaryCountByLocation(location: number ,count: number): ModelDictionaryUniversity {
    let z = ModelDictionary.createModelDictionaryByLocation(location);

    let model = new ModelDictionaryUniversity();
    model.code = z.code;
    model.ruVersion = z.ruVersion;
    model.uzVersion = z.uzVersion;
    model.count = count;
    return model;
  }

  public static createModelDictionaryCount(str1: string, str2: string, code: number,id:number): ModelDictionaryUniversity {
   
    let model = new ModelDictionaryUniversity();
    model.code = code;
    model.ruVersion = str1;
    model.uzVersion = str2;
    model.id = id;
    return model;
  }
}
