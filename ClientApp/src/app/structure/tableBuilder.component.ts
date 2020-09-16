import { Component, Pipe, PipeTransform } from "@angular/core";
import { Repository } from '../models/repository';
import { TableHeader } from '../models/tableHeader';
import { FacultyDto } from '../models/faculty.model';
import { MessageService } from '../models/messageService';
import { ModelDictionary } from '../models/modelDictionary.model';


@Component({
  selector: "table-builder",
  templateUrl: "tableBuilder.component.html",
  styleUrls: ["./tableBuilder.component.css"],
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
        let f = dict[value.universityId];
        if (f===undefined||f===null) {
          
          dict[value.universityId] = [];

          dict[value.universityId].push(value);
          f = dict[value.universityId];
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
  [Key: number]: T;
}

