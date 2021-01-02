import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of  } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class AuthService {

  authenticated: boolean = false;

  constructor(private http: HttpClient, private router: Router) {

  }


  authenticate(login: string, password: string): Observable<boolean> {
    this.authenticated = false;

     return this.http.post<boolean>("/admin/login", {
      login: login, password: password
     }).pipe(map(response => {
       if (response) {
         this.authenticated = true;
         this.router.navigateByUrl("admin/main");

       }
       return this.authenticated;
     }),
       catchError(e => {
         this.authenticated = false;
         return of(false);
       })
     );
  }

  logout() {
    this.http.get<any>('admin/logout');
    this.authenticated = false; 
    this.router.navigateByUrl("admin");

  } 
} 
