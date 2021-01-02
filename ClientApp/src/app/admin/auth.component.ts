import { Component } from "@angular/core";
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { error } from 'util';
import { AuthService } from '../models/auth.service';


@Component({
  templateUrl: "auth.component.html"
})

export class AuthComponent {

  public username: string;
  public password: string;
  public showError: boolean;


  constructor(private router: Router, private auth: AuthService) {

  }

  authenticate(form: NgForm) {
    if (form.valid) {
      this.auth.authenticate(this.username, this.password)
        .subscribe(x => {
          this.showError = !x;
        });
    }
    else {
      this.showError = true;
    }

  }

  logOut() {
    this.auth.logout();
  }

}
