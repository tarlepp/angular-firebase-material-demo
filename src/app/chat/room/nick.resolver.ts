import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { LocalStorageService } from 'ng2-webstorage';

@Injectable()
export class NickResolver implements Resolve<any> {
  /**
   * Constructor of the class.
   *
   * @param {LocalStorageService} localStorage
   */
  constructor(private localStorage: LocalStorageService) { }

  /**
   * Resolve method to get user nick for chat.
   *
   * Note that this method relies that 'RoomGuard' is run within route 'canActivate' block.
   *
   * @param {ActivatedRouteSnapshot}  route
   * @param {RouterStateSnapshot}     state
   * @returns {any|string}
   */
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>|Promise<any>|any {
    return this.localStorage.retrieve('nick');
  }
}