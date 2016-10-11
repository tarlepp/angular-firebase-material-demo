/**
 * Generic directive to attach flex style property to any element. Examples;
 *
 *  <div flex></div>
 *    => <div style="flex: 1 1 0%;"></div>
 *
 *  <div flex="10"></div>
 *    => <div style="flex: 1 1 10%;"></div>
 *
 *  <div flex="10" grow="2"></div>
 *    => <div style="flex: 2 1 10%;"></div>
 *
 *  <div flex="10" shrink="2"></div>
 *    => <div style="flex: 1 2 10%;"></div>
 *
 * More information about each CSS property that directive uses;
 *  http://www.w3schools.com/cssref/css3_pr_flex.asp
 */
import { Directive, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[flex]'
})

export class FlexDirective {
  @Input() shrink: number = 1;
  @Input() grow: number = 1;
  @Input() flex: string;

  @HostBinding('style.flex')
  get style() {
    return `${this.grow} ${this.shrink} ${this.flex === '' ? '0' : this.flex}%`;
  }
}
