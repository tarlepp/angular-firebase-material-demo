/**
 * Generic directive to attach 'display: flex', 'flex-direction', 'align-items' and 'justify-content' to any element.
 * Usage examples;
 *
 *  <div layout="row"></div>
 *    => <div style="display: flex; flex-direction: row;"></div>
 *
 *  <div layout="column" layoutAlign="center></div>
 *    => <div style="display: flex; flex-direction: column; align-items: center;"></div>
 *
 *  <div layout="column" layoutJustify="space-around></div>
 *    => <div style="display: flex; flex-direction: column; justify-content: space-around;"></div>
 *
 * More information about each CSS property that directive uses;
 *  https://developer.mozilla.org/en-US/docs/Web/CSS/display
 *  https://developer.mozilla.org/en/docs/Web/CSS/flex-direction
 *  https://developer.mozilla.org/en-US/docs/Web/CSS/align-items
 *  https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content
 */
import { Directive, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[layout]'
})

export class LayoutDirective {
  @Input() layout: string;
  @Input() layoutAlign: string;
  @Input() layoutJustify: string;

  @HostBinding('style.display') display = 'flex';

  @HostBinding('style.flex-direction')
  get flexDirection() {
    return (this.layout === 'column') ? 'column' : 'row';
  }

  @HostBinding('style.align-items')
  get alignItems() {
    return this.layoutAlign ? this.layoutAlign : 'start';
  }

  @HostBinding('style.justify-content')
  get justifyContent() {
    return this.layoutJustify ? this.layoutJustify : 'stretch';
  }
}
