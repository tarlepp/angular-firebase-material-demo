import * as firebase from 'firebase'; // See https://github.com/angular/angularfire2/issues/529
import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthMethods, AuthProviders } from 'angularfire2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  constructor(
    public af: AngularFire,
    public router: Router
  ) { }

  ngOnInit() {
    this.af.auth.subscribe(auth => {
      if (auth && auth.uid) {
        this.router.navigateByUrl('/about');
      }
    });
  }

  login(provider: string) {
    this.af.auth
      .login({
        provider: AuthProviders[provider],
        method: AuthMethods.Popup,
      })
      .then(() => {
        this.router.navigateByUrl('/todos');
      })
      .catch(error => {
        alert(error);
      })
    ;
  }
}
