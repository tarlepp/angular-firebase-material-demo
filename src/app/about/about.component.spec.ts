import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MaterialModule } from '@angular/material';

import { AboutComponent } from './about.component';

describe('Component: /about/about.component.ts', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AboutComponent,
      ],
      imports: [
        MaterialModule.forRoot(),
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render expected count \'Used libraries\' items', () => {
    const mdListElements = fixture.debugElement.query(By.css('.used-libraries')).children;

    expect(mdListElements.length).toEqual(fixture.componentInstance.libraries.length);
  });

  it('should render expected count \'External links\' items', () => {
    const mdListElements = fixture.debugElement.query(By.css('.external-links')).children;

    expect(mdListElements.length).toEqual(fixture.componentInstance.externalLinks.length);
  });
});
