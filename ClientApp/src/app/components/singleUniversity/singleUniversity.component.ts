import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { University } from '../../models/university.model';
import { ModelDictionary } from '../../models/modelDictionary.model';
import { RetriveService } from '../../services/retriveService';
import { TableHeader } from '../../models/tableHeader';
import { SubjectMap } from '../../models/subject.model';
import { LanguageProvider } from '../../services/languageProvider';
import { MessageService } from '../../models/messageService';
import { Repository } from '../../models/repository';
import { Style } from '../../models/style';
import { Meta, Title } from '@angular/platform-browser';

const url ="/api/university"

@Component({
  selector:"single-university",
  templateUrl: "singleUniversity.component.html"
})
export class SingleUniversityComponent implements OnInit {
  order: number;
  id: number;
  currentUniversity: University;
  allEducationType: ModelDictionary[];
  allLanguage: ModelDictionary[];
  tHeader: TableHeader;
  constructor(activateRoute: ActivatedRoute,
    private titleService:Title,
    private http: HttpClient,
    private languageProvider: LanguageProvider,
    private messageService: MessageService,
    private repo: Repository,
    private style: Style,
    private metaService:Meta) {
    this.id = activateRoute.snapshot.params['id'];
    this.tHeader = new TableHeader();
    this.tHeader.setTableHeader(languageProvider.getLanguage());
    style.subjectDisplay = '';
  //  style.uNameDisplay = 'none';
    style.canOrder = true;

   
  }
  ngOnInit(): void {
    this.getUniversity();
   
    }

  get currentLanguage(): string {
    return this.languageProvider.getLanguage();
  }

  getUniversity() {
   
    this.http.get<University>(url + '/' + this.id).subscribe(u => {
      this.currentUniversity = u;
      if (this.currentUniversity.faculties != null) {
        this.retriveEducationType();
        this.retriveLanguages();
        this.repo.currentSubject.educationType = this.allEducationType[0];
        this.repo.currentSubject.language = this.allLanguage[0];
        this.repo.allUniversities.push(this.currentUniversity);
        this.messageService.build();
        let title =this. currentLanguage =="uz" ? this.university.nameUz :this.university.nameRu;
        this.titleService.setTitle(title);
        this.initializeMetaTags(title);
      }
     
    });
  }

  initializeMetaTags(title:string) {
    this.metaService.addTags([
      { name: 'keywords', content: title.split(" ").join(",") },
      { name: 'description', content: title },
    ]);
  }

  get facCount(): number {
    return this.repo.allUniversities.length;
  }

  get tableHeader(): TableHeader {
    return this.tHeader;
  }


  get university():University {
    return this.currentUniversity;
  }

  removeHttpUrl(url: string): string {
    if (url === null || url === undefined) return null;
    let x = url.replace("http://","");
    return x;
  }

  createSubject(s: SubjectMap):string {
    let first = ModelDictionary.createModelDictionaryBySubject(s.firstSubject);
    let second = ModelDictionary.createModelDictionaryBySubject(s.secondSubject);
    if (this.currentLanguage == "ru")
      return `${first.ruVersion}, ${second.ruVersion}`;
    return `${first.uzVersion}, ${second.uzVersion}`;
   
  }


  selectEducationType(e:ModelDictionary) {
    this.repo.currentSubject.educationType = e;
    this.messageService.build();
  }
  selectLanguage(l: ModelDictionary) {
    this.repo.currentSubject.language = l;
    this.messageService.build();
  }
  get eduTypes():ModelDictionary[] {
    return this.allEducationType;
  }
  get languages(): ModelDictionary[] {
    return this.allLanguage;
  }


  retriveEducationType() {
    this.allEducationType = RetriveService.retriveEducationType(this.currentUniversity.faculties);
  }
  retriveLanguages() {
    this.allLanguage = RetriveService.retriveLanguages(this.currentUniversity.faculties);
  }

  isThisLanguage(id: number): boolean {

    if (id == 0) return false;

    if (this.repo.currentSubject.language === undefined || this.repo.currentSubject.language === null) return false;

    return this.repo.currentSubject.language.code == id;
  }
  isThisEducationType(id: number): boolean {
    if (id == 0) return false;

    if (this.repo.currentSubject.educationType === undefined || this.repo.currentSubject.educationType === null) return false;

    return this.repo.currentSubject.educationType.code == id;
  }


 

}
