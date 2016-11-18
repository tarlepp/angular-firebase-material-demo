import { Component } from '@angular/core';

import { Animations, AnimationsService } from '../shared/';
import { AboutItem } from './interfaces/';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})

export class AboutComponent extends Animations {
  public libraries: AboutItem[] = [
    {
      name: 'Angular 2',
      logo: '/assets/angular.png',
      url: 'https://github.com/angular/angular',
    },
    {
      name: 'Material Design for Angular 2',
      logo: '/assets/angular.png',
      url: 'https://github.com/angular/material2',
    },
    {
      name: 'AngularFire2',
      logo: '/assets/firebase.png',
      url: 'https://github.com/angular/angularfire2',
    },
    {
      name: 'angular2-moment',
      url: 'https://github.com/urish/angular2-moment',
    },
  ];

  public externalLinks: AboutItem[] = [
    {
      name: 'Angular 2',
      logo: '/assets/angular.png',
      url: 'https://angular.io',
    },
    {
      name: 'Material design',
      url: 'https://material.google.com',
    },
    {
      name: 'Firebase',
      logo: '/assets/firebase.png',
      url: 'https://firebase.google.com',
    },
    {
      name: 'Angular 2 style guide',
      logo: '/assets/angular.png',
      url: 'https://angular.io/docs/ts/latest/guide/style-guide.html',
    },
    {
      name: 'Moment.js',
      url: 'http://momentjs.com/',
    },
  ];

  /**
   * Constructor of the class
   *
   * @param {AnimationsService} animationsService
   */
  public constructor(
    protected animationsService: AnimationsService
  ) {
    super(animationsService);
  }
}
