import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFire, AuthMethods, AuthProviders } from 'angularfire2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  constructor(
    private angularFire: AngularFire,
    private router: Router
  ) { }

  ngOnInit() {
    this.angularFire.auth.subscribe(auth => {
      if (auth && auth.uid) {
        this.router.navigateByUrl('/about');
      }
    });
  }

  login(provider: string) {
    this.angularFire.auth
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
