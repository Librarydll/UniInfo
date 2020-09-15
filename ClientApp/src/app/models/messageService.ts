import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class MessageService {
  private _listners = new Subject<any>();

  listen(): Observable<any> {
    return this._listners.asObservable();
  }

  build() {
    this._listners.next("build");
  }
  clear() {
    this._listners.next("clear");
  }
}
