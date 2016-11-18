import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFire, AuthMethods, AuthProviders } from 'angularfire2';

import { Animations, AnimationsService } from '../shared/';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent extends Animations implements OnInit {
  /**
   * Constructor of the class.
   *
   * @param {AnimationsService} animationsService
   * @param {AngularFire}       angularFire
   * @param {Router}            router
   */
  public constructor(
    protected animationsService: AnimationsService,
    private angularFire: AngularFire,
    private router: Router
  ) {
    super(animationsService);
  }

  /**
   * ngOnInit lifecycle hook.
   *
   * @see https://angular.io/docs/ts/latest/guide/lifecycle-hooks.html
   */
  public ngOnInit() {
    this.angularFire.auth.subscribe(auth => {
      if (auth && auth.uid) {
        this.router.navigateByUrl('/about');
      }
    });
  }

  /**
   * Method to login with specified provider.
   *
   * @param {string}  provider
   */
  public login(provider: string) {
    this.angularFire.auth
      .login({
        provider: AuthProviders[provider],
        method: AuthMethods.Popup,
      })
      .then(() => {
        this.router.navigate(['/todos']);
      })
      .catch(error => {
        alert(error);
      })
    ;
  }
}
