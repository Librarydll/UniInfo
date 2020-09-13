import { Component } from '@angular/core';
import { Repository } from "./models/repository";
import { Product } from "./models/product.model";
import { Subject } from './models/subject.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    constructor(private repo: Repository) { }

    get subjects(): Subject[] {
      return this.repo.subjectNames;
    }
}
