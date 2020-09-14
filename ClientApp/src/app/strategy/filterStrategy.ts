import { Subject } from '../models/subject.model';
import { ModelDictionary } from '../models/modelDictionary.model';

export interface IFilter {
  filter(listSubjects: Subject[], subject: ModelDictionary): ModelDictionary[];
}

export class FilterByFirstSubject implements IFilter {

  filter(listSubjects: Subject[], model: ModelDictionary): ModelDictionary[] {

    let list = listSubjects
      .filter(x => x.firstSubject.code == model.code)
      .filter(x=>x.secondSubject!=null)
      .filter((s, i, array) => array.findIndex(x => x.secondSubject.code == s.secondSubject.code) === i);
    return list.map(x =>
      ModelDictionary.createModelDictionary(x.secondSubject.ruVersion, x.secondSubject.uzVersion, x.secondSubject.code));

   }

}

export class FilterBySecondSubject implements IFilter {

  filter(listSubjects: Subject[], model: ModelDictionary): ModelDictionary[] {

    let list = listSubjects
      .filter(x => x.secondSubject != null)
      .filter(x => x.secondSubject.code == model.code)
      .filter(x => x.thirdSubject != null);
    return list.map(x =>
      ModelDictionary.createModelDictionary(x.thirdSubject.ruVersion, x.thirdSubject.uzVersion, x.thirdSubject.code));

    }

}

export class FilterByNoSubject implements IFilter {
    filter(listSubjects: Subject[], subject: ModelDictionary): ModelDictionary[] {
      let list = listSubjects.filter(
        (sub, i, array) => array.findIndex(x => x.firstSubject.code == sub.firstSubject.code) === i);
      return list.map(x =>
        ModelDictionary.createModelDictionary(x.firstSubject.ruVersion, x.firstSubject.uzVersion, x.firstSubject.code));
    }

}

