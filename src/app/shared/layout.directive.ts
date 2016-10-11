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

enum flexDirection {
  row = 1,
  'row-reverse',
  column,
  'column-reverse',
}

@Directive({
  selector: '[layout]'
})

export class LayoutDirective {
  @Input() layout: flexDirection;
  @Input() layoutAlign: string;
  @Input() layoutJustify: string;

  @HostBinding('style.display') display = 'flex';

  @HostBinding('style.flex-direction')
  get flexDirection() {
    if (!flexDirection[this.layout]) {
      throw new Error(
        `Invalid layout property value '${this.layout}', use one of following '${LayoutDirective.getPropertyNames(flexDirection).join("', '")}'`
      )
    }

    return flexDirection[this.layout];
  }

  @HostBinding('style.align-items')
  get alignItems() {
    return this.layoutAlign ? this.layoutAlign : 'start';
  }

  @HostBinding('style.justify-content')
  get justifyContent() {
    return this.layoutJustify ? this.layoutJustify : 'stretch';
  }

  static getPropertyNames(data: Object): Array {
    return Object.getOwnPropertyNames(data).filter((number) => !Number(number));
  }
}
