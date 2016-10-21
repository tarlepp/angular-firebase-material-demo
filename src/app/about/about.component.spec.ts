import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';

import { AboutComponent } from './about.component';

describe('Component: /about/about.component.ts', () => {
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AboutComponent,
      ],
      imports: [
        MaterialModule.forRoot(),
      ],
    });

    fixture = TestBed.createComponent(AboutComponent);
  });

  it('should render expected count \'Used libraries\' items', () => {
    fixture.detectChanges();

    const mdListElements = fixture.debugElement.query(By.css('.used-libraries')).children;

    expect(mdListElements.length).toEqual(fixture.componentInstance.libraries.length);
  });

  it('should render expected count \'External links\' items', () => {
    fixture.detectChanges();

    const mdListElements = fixture.debugElement.query(By.css('.external-links')).children;

    expect(mdListElements.length).toEqual(fixture.componentInstance.externalLinks.length);
  });
});
