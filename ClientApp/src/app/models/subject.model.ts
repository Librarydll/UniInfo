import { ModelDictionary } from './modelDictionary.model';

export interface ISubject<T> {
  firstSubject: T;
  secondSubject: T;
  thirdSubject: T;
}

export class Subject implements ISubject<ModelDictionary>{

    firstSubject: ModelDictionary;
    secondSubject: ModelDictionary;
    thirdSubject: ModelDictionary;

  constructor() { }

  

  public isFilled(): boolean {

    if ((this.firstSubject === null || this.firstSubject === undefined) ||
      (this.secondSubject === null || this.secondSubject === undefined) ||
      (this.thirdSubject === null || this.thirdSubject === undefined ))
    {
      return false
    };
    return true;
  }

}

export class SubjectDto extends Subject {

  language: ModelDictionary;
  educationType: ModelDictionary;

  public isPropertyFilled() {
    if ((this.language === null || this.language === undefined) ||
      (this.educationType === null || this.educationType === undefined)) {
      return false
    };
    return true;
  }

  public clear() {
    this.firstSubject = null;
    this.secondSubject = null;
    this.thirdSubject = null;
    this.language = null;
    this.educationType = null;
  }
}

export class SubjectMap {

  constructor(public firstSubject?: number, public secondSubject?: number, public thirdSubject?: number,public certificate?:string) {
    this.firstSubject = firstSubject;
    this.secondSubject = secondSubject;
    this.thirdSubject = thirdSubject;
    this.certificate = certificate;
  }
 

}
