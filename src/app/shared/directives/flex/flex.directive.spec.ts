import { TestBed } from '@angular/core/testing';
import { Component } from '@angular/core/src/metadata/directives';
import { By } from '@angular/platform-browser';

import { FlexDirective } from './flex.directive';

describe('Directive: /shared/directives/flex/flex.directive.ts', () => {
  let fixture;

  it('should add expected styles to element with minimum setup', () => {
    @Component({
      selector: 'app-test-cmp',
      template: '<div appFlex></div>',
    })
    class TestComponent { }

    TestBed.configureTestingModule({
      declarations: [
        TestComponent,
        FlexDirective
      ],
    });

    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();

    // Determine element styles
    let styles = fixture.debugElement.query(By.css('div')).styles;

    const expectedStyles = {
      'flex': '1 1 auto',
    };

    expect(styles).toEqual(expectedStyles);
  });

  it('should add expected styles to element', () => {
    @Component({
      selector: 'app-test-cmp',
      template: '<div appFlex="10%" data-appFlexGrow="2" data-appFlexShrink="0"></div>',
    })
    class TestComponent { }

    TestBed.configureTestingModule({
      declarations: [
        TestComponent,
        FlexDirective
      ],
    });

    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();

    // Determine element styles
    let styles = fixture.debugElement.query(By.css('div')).styles;

    const expectedStyles = {
      'flex': '2 0 10%',
    };

    expect(styles).toEqual(expectedStyles);
  });
});
