import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import { ChatItem } from '../interfaces/chat-item.interface';

@Injectable()
export class MessagesResolver implements Resolve<any> {
  /**
   * Constructor of the class.
   *
   * @param {AngularFire} angularFire
   */
  constructor(private angularFire: AngularFire) { }

  /**
   * Resolve method to get latest chat messages from FireBase.
   *
   * Note that this method relies that 'AuthenticationGuard' is run within route 'canActivate' block.
   *
   * @param {ActivatedRouteSnapshot}  route
   * @param {RouterStateSnapshot}     state
   * @returns {Promise<FirebaseListObservable<ChatItem[]>>}
   */
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<FirebaseListObservable<ChatItem[]>> {
    const list = this.angularFire.database.list(
      '/messages/',
      {
        query: {
          limitToLast: 100
        }
      }
    );

    return new Promise((resolve, reject) => {
      list.first().subscribe(() => resolve(list), reject);
    });
  }
}
