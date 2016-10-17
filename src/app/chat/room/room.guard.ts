import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { LocalStorageService } from 'ng2-webstorage';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

/**
 * This class implements a guard for routes that require successful authentication.
 */
@Injectable()
export class RoomGuard implements CanActivate {
  /**
   * Constructor of the class.
   *
   * @param {LocalStorageService} localStorage
   * @param {Router}              router
   */
  constructor(
    private localStorage: LocalStorageService,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean>|Promise<boolean>|boolean {
    if (!!this.localStorage.retrieve('nick')) {
      return true;
    }

    this.router.navigateByUrl('/chat/entry');

    return false;
  }
}