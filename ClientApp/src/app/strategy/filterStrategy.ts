import { Subject, ISubject } from '../models/subject.model';
import { ModelDictionary } from '../models/modelDictionary.model';

export interface IFilter {
  filter(listSubjects: Subject[], subject: ISubject<ModelDictionary>): ModelDictionary[];
}


export class FilterByNoSubject implements IFilter {
  filter(listSubjects: Subject[], subject: ISubject<ModelDictionary>): ModelDictionary[] {

  
    let list = listSubjects.filter(
      (sub, i, array) => array.findIndex(x => x.firstSubject.code == sub.firstSubject.code) === i);
    let list2 = listSubjects.filter(
      (sub, i, array) => array.findIndex(x => x.secondSubject.code == sub.secondSubject.code) === i);
    let list3 = list.concat(list2).filter(
      (sub, i, array) => array.findIndex(x => x.firstSubject.code == sub.firstSubject.code) === i);
    return list3.map(x =>
      ModelDictionary.createModelDictionary(x.firstSubject.ruVersion, x.firstSubject.uzVersion, x.firstSubject.code));
  }

}


export class FilterByFirstSubject implements IFilter {

  filter(listSubjects: Subject[], model: ISubject<ModelDictionary>): ModelDictionary[] {

    let list = listSubjects
      .filter(x => x.firstSubject.code == model.firstSubject.code);

    let list2 = listSubjects
      .filter(x => x.secondSubject != null)
      .filter(x => x.secondSubject.code == model.firstSubject.code);

    list2 = list2.map(x => {
      let s = new Subject();
      s.firstSubject = x.secondSubject;
      s.secondSubject = x.firstSubject;
      return s; 
    });

    let list3 = list.concat(list2).filter(
      (sub, i, array) => array.findIndex(x => x.secondSubject.code == sub.secondSubject.code) === i)

    return list3.map(x =>
      ModelDictionary.createModelDictionary(x.secondSubject.ruVersion, x.secondSubject.uzVersion, x.secondSubject.code));

   }

}

//export class FilterBySecondSubject implements IFilter {

//  filter(listSubjects: Subject[], model: ISubject<ModelDictionary>): ModelDictionary[] {

//    let list = listSubjects
//      .filter(x => x.firstSubject.code == model.firstSubject.code)
//      .filter(x => x.secondSubject != null)
//      .filter(x => x.secondSubject.code == model.secondSubject.code)
//      .filter(x => x.thirdSubject != null);
//    return list.map(x =>
//      ModelDictionary.createModelDictionary(x.thirdSubject.ruVersion, x.thirdSubject.uzVersion, x.thirdSubject.code));

//    }

//}



