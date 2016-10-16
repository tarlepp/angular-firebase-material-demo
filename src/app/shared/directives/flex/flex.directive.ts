/**
 * Generic directive to attach flex style property to any element. Examples;
 *
 *  <div appFlex></div>
 *    => <div style="flex: 1 1 auto;"></div>
 *
 *  <div appFlex="10"></div>
 *    => <div style="flex: 1 1 10%;"></div>
 *
 *  <div appFlex="10" appFlexGrow="2"></div>
 *    => <div style="flex: 2 1 10%;"></div>
 *
 *  <div appFlex="10" data-appFlexShrink="0"></div>
 *    => <div style="flex: 1 0 10%;"></div>
 *
 * More information about each CSS property that directive uses;
 *  http://www.w3schools.com/cssref/css3_pr_flex.asp
 */
import { Directive, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[appFlex]'
})

export class FlexDirective {
  @Input() appFlexShrink: number = 1;
  @Input() appFlexGrow: number = 1;
  @Input() appFlex: string;

  @HostBinding('style.flex')
  get style() {
    return `${this.appFlexGrow} ${this.appFlexShrink} ${this.appFlex === '' ? 'auto' : this.appFlex}`;
  }
}
