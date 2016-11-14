import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-about-list',
  templateUrl: './about-list.component.html',
  styleUrls: ['./about-list.component.scss']
})

export class AboutListComponent {
  @Input()
  items: any;

  @Input()
  className: string;

  public constructor() { }
}
