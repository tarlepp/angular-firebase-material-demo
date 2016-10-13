/**
 * Generic directive to attach flex style property to any element. Examples;
 *
 *  <div appFlex></div>
 *    => <div style="flex: 1 1 0%;"></div>
 *
 *  <div appFlex="10"></div>
 *    => <div style="flex: 1 1 10%;"></div>
 *
 *  <div appFlex="10" appGrow="2"></div>
 *    => <div style="flex: 2 1 10%;"></div>
 *
 *  <div appFlex="10" appShrink="2"></div>
 *    => <div style="flex: 1 2 10%;"></div>
 *
 * More information about each CSS property that directive uses;
 *  http://www.w3schools.com/cssref/css3_pr_flex.asp
 */
import { Directive, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[appFlex]'
})

export class FlexDirective {
  @Input() appShrink: number = 1;
  @Input() appGrow: number = 1;
  @Input() appFlex: string;

  @HostBinding('style.flex')
  get style() {
    return `${this.appGrow} ${this.appShrink} ${this.appFlex === '' ? '0' : this.appFlex}%`;
  }
}
