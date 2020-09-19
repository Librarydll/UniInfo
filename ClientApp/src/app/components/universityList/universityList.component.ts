import { Component } from "@angular/core";
import { Repository } from '../../models/repository';
import { ModelDictionary, ModelDictionaryUniversity } from '../../models/modelDictionary.model';
import { Filter } from '../../models/configClasses.repository';
import { University } from '../../models/university.model';
import { LanguageProvider } from '../../services/languageProvider';


@Component({
  selector: "u-list",
  templateUrl: "universityList.component.html"
})
export class UniversityListComponent {

  uNames: ModelDictionaryUniversity[];
  lUniversity: ModelDictionary[];
  constructor(private repo: Repository, private languageProvider: LanguageProvider) {
    this.repo.getUniversities();
  }

  get currentLanguage(): string {
    return this.languageProvider.getLanguage();
  }

  get universityNames(): ModelDictionaryUniversity[] {

    if (this.repo.universities === undefined || this.repo.universities === null) return null;


    let result: ModelDictionaryUniversity[] =[];
    this.repo.universities.forEach((v) => {

      
      let entity = result.find(x => x.code == v.location);
      if (entity === undefined || entity === null) {
        entity = ModelDictionaryUniversity.createModelDictionaryCountByLocation(v.location ,0);

        result.push(entity);
      }      entity.count += 1;
    })

    this.uNames = result.sort();
    return this.uNames;
  }

  get filter() : Filter {
    return this.repo.filter;
  }

  searchUniversity() {
  }

  get listUniversity():ModelDictionary[]{
    return this.lUniversity;
  }

  

  selectCity(u: ModelDictionary) {
    this.repo.filter.code = u.code;
    this.createList();
  }

  isThatCity(id:number):boolean {

    if (this.filter === undefined || this.filter === null) return false;
    return this.filter.code == id;
  }

  onTextChange() {
    this.createList();
  }
  onCityChange(code: number) {
    this.repo.filter.code = code;
    this.createList();
  }

  createList() {
   
    if (this.filter === undefined || this.filter === null) return null;
    let z: University[] = [];
    if (this.filter.code != 0) {//when select city
      z = this.repo.universities.filter(x => x.location == this.filter.code);
    }

    if (this.filter.city !== undefined) {

      if (this.filter.city.length > 0) {
        if (z.length > 0) {
          z = z.filter(x => x.nameRu.toLowerCase().includes(this.filter.city.toLowerCase())
            || x.nameUz.toLowerCase().includes(this.filter.city.toLowerCase()));
        }
        else {
          z = this.repo.universities.filter(x => x.nameRu.toLowerCase().includes(this.filter.city.toLowerCase())
            || x.nameUz.toLowerCase().includes(this.filter.city.toLowerCase()));
        }
      }
    }
    this.lUniversity = z.map(x => ModelDictionaryUniversity.createModelDictionaryCount(x.nameRu, x.nameUz, x.location,x.id));
  }

  selectUniversity(id: number) {
   let elemet = document.getElementById("ul" + id) as HTMLElement;
   elemet.click();
   
  }

  get notActiveClass():string{
    return 'list-group-item d-flex justify-content-between align-items-center bg-transparent-noimportant ul-li';
  }

  get activeClass(): string {
    return 'item-btn item-btn-city list-group-item d-flex justify-content-between align-items-center';
  }

}
