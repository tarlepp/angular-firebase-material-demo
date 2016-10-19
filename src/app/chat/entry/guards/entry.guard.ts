import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { LocalStorageService } from 'ng2-webstorage';
import { Observable } from 'rxjs';

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

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean>|Promise<boolean>|boolean {
    if (!this.localStorage.retrieve('nick')) {
      return true;
    }

    this.router.navigateByUrl('/chat');

    return false;
  }
}