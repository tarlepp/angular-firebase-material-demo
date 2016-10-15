import { Component } from '@angular/core/src/metadata/directives';
import { TestBed } from '@angular/core/testing';
import { LayoutDirective } from './layout.directive';

describe('Directive: Layout', () => {
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
      template: '<div appLayout="column" appLayoutAlign="bar"></div>',
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
      template: '<div appLayout="column" appLayoutJustify="foobar"></div>',
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
});
