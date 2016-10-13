import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFire, FirebaseAuthState, FirebaseAuth, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class TodosResolver implements Resolve<any> {
  constructor(
    private auth: FirebaseAuth,
    private af: AngularFire
  ) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<FirebaseListObservable<any>> {
    return this.auth
      .take(1)
      .map((authState: FirebaseAuthState) => this.af.database.list('/todos/' + authState.uid))
    ;
  }
}
