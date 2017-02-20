import { Component } from '@angular/core';

import { AnimationsService } from './shared/animations/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  public activateAnimation = false;

  /**
   * Constructor of the class
   *
   * @param {AnimationsService} animationService
   */
  public constructor(
    private animationService: AnimationsService
  ) {
    this.animationService.activateAnimation$.subscribe(
      (value) => this.activateAnimation = value
    );
  }
}
