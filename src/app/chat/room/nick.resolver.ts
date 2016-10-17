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

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>|Promise<any>|any {
    return this.localStorage.retrieve('nick');
  }
}