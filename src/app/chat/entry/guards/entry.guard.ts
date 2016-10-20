import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { LocalStorageService } from 'ng2-webstorage';

@Injectable()
export class EntryGuard implements CanActivate {
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

  /**
   * Purpose of this guard is check if current user has not given nick for chat. If nick is found from local storage
   * user will be redirected to actual chat and route that uses this guard cannot be activated.
   *
   * @param {ActivatedRouteSnapshot}  route
   * @param {RouterStateSnapshot}     state
   * @returns {boolean}
   */
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (!this.localStorage.retrieve('nick')) {
      return true;
    }

    this.router.navigateByUrl('/chat');

    return false;
  }
}
