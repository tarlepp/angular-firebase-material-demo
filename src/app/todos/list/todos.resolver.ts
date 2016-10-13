import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class TodosResolver implements Resolve<any> {
  constructor(private af: AngularFire) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<FirebaseListObservable<any>> {
    return Observable.of(this.af.database.list('/todos/' + localStorage.getItem('uid')));
  }
}
