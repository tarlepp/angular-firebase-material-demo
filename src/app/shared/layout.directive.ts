/**
 * Generic directive to attach 'display: flex', 'flex-direction', 'align-items' and 'justify-content' to any element.
 * Usage examples;
 *
 *  <div appLayout="row"></div>
 *    => <div style="display: flex; flex-direction: row;"></div>
 *
 *  <div appLayout="column" appLayoutAlign="center></div>
 *    => <div style="display: flex; flex-direction: column; align-items: center;"></div>
 *
 *  <div appLayout="column" appLayoutJustify="space-around></div>
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
  selector: '[appLayout]'
})

export class LayoutDirective {
  @Input() appLayout: flexDirection;
  @Input() appLayoutAlign: alignItems = alignItems['stretch'];
  @Input() appLayoutJustify: justifyContent = justifyContent['flex-start'];

  @HostBinding('style.display') display = 'flex';

  @HostBinding('style.flex-direction')
  get flexDirection() {
    this.validateInput('appLayout', flexDirection);

    return this.appLayout;
  }

  @HostBinding('style.align-items')
  get alignItems() {
    this.validateInput('appLayoutAlign', alignItems);

    return this.appLayoutAlign;
  }

  @HostBinding('style.justify-content')
  get justifyContent() {
    this.validateInput('appLayoutJustify', justifyContent);

    return this.appLayoutJustify;
  }

  static getPropertyNames(data: Object): Array<string> {
    return Object.getOwnPropertyNames(data).filter((number) => !Number(number));
  }

  private validateInput(variable: string, collection: Object) {
    if (!collection[this[variable]]) {
      const items = LayoutDirective.getPropertyNames(collection);

      throw new Error(
        `Invalid '${variable}' attribute value '${this[variable]}', use one of following: '${items.join('\', \'')}'.`
      );
    }
  }
}
