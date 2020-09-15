import { ModelDictionary } from '../models/modelDictionary.model';

export abstract class TableBuilder {

  

  constructor(public langCriteria:ModelDictionary,public eduCriteria:ModelDictionary) {
    this.langCriteria = langCriteria;
    this.eduCriteria = eduCriteria;
  }

  public abstract buildTable();

}


export class TableBuilderRu extends TableBuilder {

  constructor(langCriteria: ModelDictionary, eduCriteria: ModelDictionary) {
    super(langCriteria, eduCriteria);
  }
  public buildTable() {



  }
}


export class TableBuilderUz extends TableBuilder {

  constructor(langCriteria: ModelDictionary, eduCriteria: ModelDictionary) {
    super(langCriteria, eduCriteria);
  }
  public buildTable() {

  }
}
