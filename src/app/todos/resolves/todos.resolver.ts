import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { TodoItem } from '../interfaces/';

@Injectable()
export class TodosResolver implements Resolve<any> {
  /**
   * Constructor of the class.
   *
   * @param {AngularFire} angularFire
   */
  constructor(private angularFire: AngularFire) { }

  /**
   * Resolve method to get current user to-do items from Firebase.
   *
   * Note that this method relies that 'AuthenticationGuard' is run within route 'canActivate' block.
   *
   * @param {ActivatedRouteSnapshot}  route
   * @param {RouterStateSnapshot}     state
   * @returns {Observable<FirebaseListObservable<TodoItem[]>>}
   */
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<FirebaseListObservable<TodoItem[]>> {
    return Observable.of(this.angularFire.database.list('/todos/' + localStorage.getItem('uid')));
  }
}
