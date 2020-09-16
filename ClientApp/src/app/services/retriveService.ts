import { Faculty } from '../models/faculty.model';
import { ModelDictionary } from '../models/modelDictionary.model';


export class RetriveService{

  static retriveEducationType(array: Faculty[]):ModelDictionary[] {
     let z = array.filter((f, i, arr) => arr.findIndex(x => x.educationType == f.educationType) === i);
     return  z.map(x => ModelDictionary.createModelDictionaryByEductaionType(x.educationType));
  }

  static retriveLanguages(array: Faculty[]): ModelDictionary[] {
    let z = array.filter((f, i, arr) => arr.findIndex(x => x.language == f.language) === i);
    return z.map(x => ModelDictionary.createModelDictionaryByLanguage(x.language));
  }

}
