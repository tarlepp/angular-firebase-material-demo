import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AboutComponent } from './about.component';
import { SharedModule } from '../shared/shared.module';

describe('Component: About', () => {
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AboutComponent,
      ],
      imports: [
        SharedModule,
      ],
    });

    fixture = TestBed.createComponent(AboutComponent);
  });

  it('should render expected count \'Used libraries\' items', () => {
    fixture.detectChanges();

    let mdListElements = fixture.debugElement.query(By.css('.used-libraries')).children;

    expect(mdListElements.length).toEqual(fixture.componentInstance.libraries.length);
  });

  it('should render expected count \'External links\' items', () => {
    fixture.detectChanges();

    let mdListElements = fixture.debugElement.query(By.css('.external-links')).children;

    expect(mdListElements.length).toEqual(fixture.componentInstance.externalLinks.length);
  });
});
