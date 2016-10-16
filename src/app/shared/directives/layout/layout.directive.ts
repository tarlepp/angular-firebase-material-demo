/**
 * Generic directive to attach 'display: flex', 'flex-direction', 'align-items' and 'justify-content' to any element.
 * Usage examples;
 *
 *  <div appLayout="row"></div>
 *    => <div style="display: flex; flex-direction: row;"></div>
 *
 *  <div appLayout="column" data-appLayoutAlign="center"></div>
 *    => <div style="display: flex; flex-direction: column; align-items: center;"></div>
 *
 *  <div appLayout="column" data-appLayoutJustify="space-around"></div>
 *    => <div style="display: flex; flex-direction: column; justify-content: space-around;"></div>
 *
 * More information about each CSS property that directive uses;
 *  https://developer.mozilla.org/en-US/docs/Web/CSS/display
 *  https://developer.mozilla.org/en/docs/Web/CSS/flex-direction
 *  https://developer.mozilla.org/en-US/docs/Web/CSS/align-items
 *  https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content
 */
import { Directive, Input, HostBinding } from '@angular/core';

import { FlexDirection } from './flex-direction.enum';
import { AlignItems } from './align-items.enum';
import { JustifyContent } from './justify-content.enum';

@Directive({
  selector: '[appLayout]'
})

export class LayoutDirective {
  // Used input attributes
  @Input() appLayout: FlexDirection;
  @Input() appLayoutAlign: AlignItems = AlignItems['stretch'];
  @Input() appLayoutJustify: JustifyContent = JustifyContent['flex-start'];

  // Bind 'style="display: flex;"' to current element.
  @HostBinding('style.display') display = 'flex';

  // Bind 'style="flex-direction: row|row-reverse|column|column-reverse"' to current element
  @HostBinding('style.flex-direction')
  get flexDirection() {
    this.validateInput('appLayout', FlexDirection);

    return this.appLayout;
  }

  // Bind 'style="flex-direction: flex-start|flex-end|center|baseline|stretch"' to current element
  @HostBinding('style.align-items')
  get alignItems() {
    this.validateInput('appLayoutAlign', AlignItems);

    return this.appLayoutAlign;
  }

  // Bind 'style="flex-direction: flex-start|flex-end|center|space-between|space-around"' to current element
  @HostBinding('style.justify-content')
  get justifyContent() {
    this.validateInput('appLayoutJustify', JustifyContent);

    return this.appLayoutJustify;
  }

  /**
   * Helper method to get property names from given object.
   *
   * @param {Object}  data
   * @returns {string[]}
   */
  static getPropertyNames(data: Object): Array<string> {
    return Object.getOwnPropertyNames(data).filter((number) => !Number(number));
  }

  /**
   * Helper method to validate given attribute input values.
   *
   * @param {string}  variable
   * @param {Object}  collection
   */
  private validateInput(variable: string, collection: Object) {
    if (!collection[this[variable]]) {
      const items = LayoutDirective.getPropertyNames(collection);

      throw new Error(
        `Invalid '${variable}' attribute value '${this[variable]}', use one of following: '${items.join('\', \'')}'.`
      );
    }
  }
}
