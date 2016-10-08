import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent implements OnInit {
  public links: any[] = [
    {
      name: 'GitHub',
      url: 'https://github.com/tarlepp/angular2-firebase-material-demo',
      icon: 'web',
    },
    {
      name: 'Issues',
      url: 'https://github.com/tarlepp/angular2-firebase-material-demo/issues',
      icon: 'bug_report',
    },
    {
      name: 'Tarmo Leppänen',
      url: 'https://github.com/tarlepp',
      icon: 'person',
    },
  ];

  constructor() { }

  ngOnInit() { }
}
