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
  'row' = 1,
  'row-reverse',
  'column',
  'column-reverse',
}

enum alignItems {
  'flex-start' = 1,
  'flex-end',
  'center',
  'baseline',
  'stretch',
}

enum justifyContent {
  'flex-start' = 1,
  'flex-end',
  'center',
  'space-between',
  'space-around',
}

@Directive({
  selector: '[layout]'
})

export class LayoutDirective {
  @Input() layout: flexDirection;
  @Input() layoutAlign: alignItems = alignItems['stretch'];
  @Input() layoutJustify: justifyContent = justifyContent['flex-start'];

  @HostBinding('style.display') display = 'flex';

  @HostBinding('style.flex-direction')
  get flexDirection() {
    this.validateInput('layout', flexDirection);

    return this.layout;
  }

  @HostBinding('style.align-items')
  get alignItems() {
    this.validateInput('layoutAlign', alignItems);

    return this.layoutAlign;
  }

  @HostBinding('style.justify-content')
  get justifyContent() {
    this.validateInput('layoutJustify', justifyContent);

    return this.layoutJustify;
  }

  static getPropertyNames(data: Object): Array<string> {
    return Object.getOwnPropertyNames(data).filter((number) => !Number(number));
  }

  private validateInput(variable: string, collection: Object) {
    if (!collection[this[variable]]) {
      const items = LayoutDirective.getPropertyNames(collection);

      throw new Error(
        `Invalid '${variable}' attribute value '${this[variable]}', use one of following: '${items.join("', '")}'.`
      )
    }
  }
}
