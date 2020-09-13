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

  public clear() {
    this.firstSubject = new ModelDictionary();
    this.secondSubject = new ModelDictionary();
    this.thirdSubject = new ModelDictionary();
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
