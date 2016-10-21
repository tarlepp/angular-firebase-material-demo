import { Component } from '@angular/core/src/metadata/directives';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { LayoutDirective } from './layout.directive';

describe('Directive: /shared/directives/layout/layout.directive.ts', () => {
  let fixture;

  it('should thrown an exception with invalid \'appLayout\' attribute value.', () => {
    @Component({
      selector: 'app-test-cmp',
      template: '<div appLayout="foo"></div>',
    })
    class TestComponent { }

    TestBed.configureTestingModule({
      declarations: [
        TestComponent,
        LayoutDirective,
      ],
    });

    fixture = TestBed.createComponent(TestComponent);

    expect(() => { fixture.detectChanges(); }).toThrowError();
  });

  it('should thrown an exception with invalid \'appLayoutAlign\' attribute value.', () => {
    @Component({
      selector: 'app-test-cmp',
      template: '<div appLayout="column" data-appLayoutAlign="bar"></div>',
    })
    class TestComponent { }

    TestBed.configureTestingModule({
      declarations: [
        TestComponent,
        LayoutDirective,
      ],
    });

    fixture = TestBed.createComponent(TestComponent);

    expect(() => { fixture.detectChanges(); }).toThrowError();
  });

  it('should thrown an exception with invalid \'appLayoutJustify\' attribute value.', () => {
    @Component({
      selector: 'app-test-cmp',
      template: '<div appLayout="column" data-appLayoutJustify="foobar"></div>',
    })
    class TestComponent { }

    TestBed.configureTestingModule({
      declarations: [
        TestComponent,
        LayoutDirective,
      ],
    });

    fixture = TestBed.createComponent(TestComponent);

    expect(() => { fixture.detectChanges(); }).toThrowError();
  });

  it('should add expected styles to element.', () => {
    @Component({
      selector: 'app-test-cmp',
      template: '<div appLayout="column" data-appLayoutAlign="center" data-appLayoutJustify="space-around"></div>',
    })
    class TestComponent { }

    TestBed.configureTestingModule({
      declarations: [
        TestComponent,
        LayoutDirective,
      ],
    });

    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();

    // Determine element styles
    let styles = fixture.debugElement.query(By.css('div')).styles;

    const expectedStyles = {
      'display': 'flex',
      'flex-direction': 'column',
      'align-items': 'center',
      'justify-content': 'space-around'
    };

    expect(styles).toEqual(expectedStyles);
  });
});
