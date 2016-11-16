import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AnimationsService {
  // Observable source
  private activateAnimation = new Subject<boolean>();

  // Observable stream
  public activateAnimation$ = this.activateAnimation.asObservable();

  // Service message commands
  announceMission(value: boolean) {
    if (!value) {
      setTimeout(() => {
        this.activateAnimation.next(value);
      }, 0);
    } else {
      this.activateAnimation.next(value);
    }
  }
}
