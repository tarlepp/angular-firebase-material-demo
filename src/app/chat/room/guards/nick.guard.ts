import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { LocalStorageService } from 'ng2-webstorage';

/**
 * This class implements a guard for routes that require successful authentication.
 */
@Injectable()
export class NickGuard implements CanActivate {
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
   * user will be allowed to enter chat. If nick isn't found from local storage user is redirected nick entry route.
   *
   * @param {ActivatedRouteSnapshot}  route
   * @param {RouterStateSnapshot}     state
   * @returns {boolean}
   */
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (!!this.localStorage.retrieve('nick')) {
      return true;
    }

    this.router.navigate(['/chat/entry']);

    return false;
  }
}
