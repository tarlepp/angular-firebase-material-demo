import { style, animate, transition, state, trigger, OnDestroy, AfterViewInit } from '@angular/core';

export class Animations implements OnDestroy, AfterViewInit {
  public activateAnimation: boolean = true;

  static page = [
    trigger('routeAnimation', [
      state('void', style({ opacity: 0 })),
      state('*', style({ opacity: 1 })),
      transition('void => *', animate('500ms ease-in')),
      transition('* => void', animate('0ms ease-out'))
    ])
  ];

  /**
   * ngOnDestroy lifecycle hook.
   *
   * @see https://angular.io/docs/ts/latest/guide/lifecycle-hooks.html
   */
  public ngOnDestroy(): void {
    this.activateAnimation = true;
  }

  /**
   * ngAfterViewInit lifecycle hook.
   *
   * @see https://angular.io/docs/ts/latest/guide/lifecycle-hooks.html
   */
  public ngAfterViewInit(): void {
    setTimeout(() => {
      this.activateAnimation = false;
    }, 500);
  }
}
