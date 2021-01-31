import { Component, OnInit } from "@angular/core";
import { Repository } from '../../models/repository';
import { ModelDictionary, ModelDictionaryUniversity } from '../../models/modelDictionary.model';
import { Filter } from '../../models/configClasses.repository';
import { University } from '../../models/university.model';
import { LanguageProvider } from '../../services/languageProvider';
import { Meta, Title } from '@angular/platform-browser';
import *  as  metaUz from '../../../assets/meta/metaUz.json';
import *  as  metaRu from '../../../assets/meta/metaRu.json';

@Component({
  selector: "u-list",
  templateUrl: "universityList.component.html"
})
export class UniversityListComponent implements OnInit {

  uNames: ModelDictionaryUniversity[];
  lUniversity: ModelDictionary[];
  constructor(private repo: Repository,
    private languageProvider: LanguageProvider,
    private titleService: Title,
    private metaService: Meta)
  {
    let title = languageProvider.getLanguage() == "uz" ? "Oliygohlar" : "Список вузов";
    titleService.setTitle(title);
  }

  ngOnInit(): void {
    this.repo.getUniversities();
    this.initializeMetaTags(this.titleService.getTitle());
  }

  initializeMetaTags(title: string) {
    this.metaService.addTags([
      { name: 'keywords', content: this.currentLanguage == "uz" ? metaUz.universityList : metaRu.universityList },
      { name: 'description', content: title },
    ]);
  }

  get currentLanguage(): string {
    return this.languageProvider.getLanguage();
  }

  get universityNames(): ModelDictionaryUniversity[] {

    if (this.repo.universities === undefined || this.repo.universities === null) return null;


    let allU = ModelDictionaryUniversity.createDefaultAll();
    let result: ModelDictionaryUniversity[] = [];
    result.push(allU);
    let count = 0;
    this.repo.universities.forEach((v) => {


      let entity = result.find(x => x.code == v.location);
      if (entity === undefined || entity === null) {
        entity = ModelDictionaryUniversity.createModelDictionaryCountByLocation(v.location, 0);

        result.push(entity);
      }
      count += 1;
      entity.count += 1;
    });
    allU.count = count;

    this.uNames = result.sort();
    return this.uNames;
  }

  get filter(): Filter {
    return this.repo.filter;
  }

  searchUniversity() {
  }

  get listUniversity(): ModelDictionary[] {
    return this.lUniversity;
  }



  selectCity(u: ModelDictionary) {
    this.repo.filter.code = u.code;
    this.createList();
  }

  isThatCity(id: number): boolean {

    if (this.filter === undefined || this.filter === null) return false;
    return this.filter.code == id;
  }

  onCityChange(code: number) {
    this.repo.filter.code = code;
    this.createList();
  }

  createList() {

    if (this.filter === undefined || this.filter === null) return null;
    let z: University[] = [];
    if (this.filter.code == Number.MAX_VALUE) {
      z = this.repo.universities;
    }
    else if (this.filter.code != 0) {//when select city
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
    this.lUniversity = z.map(x => ModelDictionaryUniversity.createModelDictionaryCount(x.nameRu, x.nameUz, x.location, x.id));
  }
  onKeyUpEvent(event: any) {
    if (!this.filter.code) {
      this.filter.code = 13;
    }
    this.repo.filter.city = event.target.value;
    this.createList();
  }
  selectUniversity(id: number) {
    let elemet = document.getElementById("ul" + id) as HTMLElement;
    elemet.click();

  }

  get notActiveClass(): string {
    return 'list-group-item d-flex justify-content-between align-items-center bg-transparent-noimportant ul-li exo2';
  }

  get activeClass(): string {
    return 'item-btn item-btn-city list-group-item d-flex justify-content-between align-items-center exo2 bg-blue';
  }

}
