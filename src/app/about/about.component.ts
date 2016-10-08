import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})

export class AboutComponent {
  libraries: any[] = [
    {
      name: 'Angular 2',
      logo: 'https://angular.io/resources/images/logos/angular2/angular.svg',
      url: 'https://github.com/angular/angular',
    },
    {
      name: 'Material Design for Angular 2',
      logo: 'https://angular.io/resources/images/logos/angular2/angular.svg',
      url: 'https://github.com/angular/material2',
    },
    {
      name: 'AngularFire2',
      logo: 'https://lh3.googleusercontent.com/-whXBCDVxIto/Vz2Rsyz-UjI/AAAAAAAAiJc/UjvR-M2b9tY5SyKFkDY6Q_MbusEINRXkQ/w1024-h1024/Firebase_16-logo.png',
      url: 'https://github.com/angular/angularfire2',
    },
    {
      name: 'Flexbox Grid',
      url: 'https://github.com/kristoferjoseph/flexboxgrid',
    },
  ];

  externalLinks: any[] = [
    {
      name: 'Angular 2',
      logo: 'https://angular.io/resources/images/logos/angular2/angular.svg',
      url: 'https://angular.io',
    },
    {
      name: 'Material design',
      url: 'https://material.google.com',
    },
    {
      name: 'Firebase',
      logo: 'https://lh3.googleusercontent.com/-whXBCDVxIto/Vz2Rsyz-UjI/AAAAAAAAiJc/UjvR-M2b9tY5SyKFkDY6Q_MbusEINRXkQ/w1024-h1024/Firebase_16-logo.png',
      url: 'https://firebase.google.com',
    },
    {
      name: 'Angular 2 style guide',
      logo: 'https://angular.io/resources/images/logos/angular2/angular.svg',
      url: 'https://angular.io/docs/ts/latest/guide/style-guide.html',
    },
  ];

  constructor() { }
}
