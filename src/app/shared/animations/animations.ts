import { OnDestroy, AfterViewInit } from '@angular/core';

import { AnimationsService } from './index';

export abstract class Animations implements OnDestroy, AfterViewInit {
  public activateAnimation = true;

  /**
   * Constructor of the class.
   *
   * @param {AnimationsService} animationsService
   */
  public constructor(
    protected animationsService: AnimationsService
  ) { }

  /**
   * ngOnDestroy lifecycle hook.
   *
   * @see https://angular.io/docs/ts/latest/guide/lifecycle-hooks.html
   */
  public ngOnDestroy(): void {
    this.animationsService.announceMission(true);
  }

  /**
   * ngAfterViewInit lifecycle hook.
   *
   * @see https://angular.io/docs/ts/latest/guide/lifecycle-hooks.html
   */
  public ngAfterViewInit(): void {
    this.animationsService.announceMission(false);
  }
}
