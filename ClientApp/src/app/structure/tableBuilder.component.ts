import { Component, Pipe, PipeTransform } from "@angular/core";
import { Repository } from '../models/repository';
import { TableHeader } from '../models/tableHeader';
import { FacultyDto } from '../models/faculty.model';
import { MessageService } from '../models/messageService';


@Component({
  selector: "table-builder",
  templateUrl: "tableBuilder.component.html"
})
export class TableBuilderComponent {

  
  onBuild() {
   this.createDictionary();
  }

  tHeader: TableHeader;
  dict: IDictionary<FacultyDto[]>;
  constructor(private repo: Repository,private messageService:MessageService) {

    this.tHeader = new TableHeader();
    this.tHeader.setTableHeader();
    this.messageService.listen().subscribe((value) => {

      if (value == "build") {
        this.onBuild();
      }
      else {
        this.clear();
      }
     
    })
  }

  get tableHeader() : TableHeader {
    return this.tHeader;
  }

  createDictionary(){

    let dict: IDictionary<FacultyDto[]> = {};
    let edutype = this.repo.currentSubject.educationType.code;
    let lang = this.repo.currentSubject.language.code;


    this.repo.allRelatedFaculties.forEach(function(value) {

      if (value.educationType == edutype && value.language == lang) {
        let f = dict[value.universityNameRu];
        if (f===undefined||f===null) {
          
          dict[value.universityNameRu] = [];

          dict[value.universityNameRu].push(value);
          f = dict[value.universityNameRu];
        }
        f.push(value);
      }
     
    });
    this.dict = dict;
  }
  clear() {
    this.dict = {};
  }
}

interface IDictionary<T> {
  [Key: string]: T;
}

