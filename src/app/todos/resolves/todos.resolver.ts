import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
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
   * @returns {Promise<FirebaseListObservable<TodoItem[]>>}
   */
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<FirebaseListObservable<TodoItem[]>> {
    const list = this.angularFire.database.list('/todos/' + localStorage.getItem('uid'));

    return new Promise((resolve, reject) => {
      list.first().subscribe(() => resolve(list), reject);
    });
  }
}
