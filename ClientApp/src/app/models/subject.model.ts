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

//export class Subject {

//  //constructor(firstSubject?: string, secondSubject: string = "", t: string = "", fRu: string = "", sRu: string = "", tRu: string = "") {
//  //  this.secondSubject = s;
//  //  this.thirdSubject = t;
//  //  this.firstSubjectRu = fRu;
//  //  this.secondSubjectRu = sRu;
//  //  this.thirdSubjectRu = tRu;
//  //}

//  //public clear() {
//  //  this.firstSubject = "";
//  //  this.secondSubject = "";
//  //  this.thirdSubject = "";
//  //  this.firstSubjectRu = "";
//  //  this.secondSubjectRu = "";
//  //  this.thirdSubjectRu = "";
//  //}

//}
