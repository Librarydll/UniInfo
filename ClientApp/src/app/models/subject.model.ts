

export class Subject {
  public id: number;
  public firstSubject: string;
  public secondSubject: string;
  public thirdSubject: string;
  public firstSubjectRu: string;
  public secondSubjectRu: string;
  public thirdSubjectRu: string;

  constructor(f: string = "", s: string = "", t: string = "", fRu: string = "", sRu: string = "", tRu: string = "") {
    this.firstSubject = f;
    this.secondSubject = s;
    this.thirdSubject = t;
    this.firstSubjectRu = fRu;
    this.secondSubjectRu = sRu;
    this.thirdSubjectRu = tRu;
  }

  public clear() {
    this.firstSubject = "";
    this.secondSubject = "";
    this.thirdSubject = "";
    this.firstSubjectRu = "";
    this.secondSubjectRu = "";
    this.thirdSubjectRu = "";
  }

}
