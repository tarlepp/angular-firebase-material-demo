import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { MaterialModule } from '@angular/material';

import { AboutListComponent } from './index';

describe('Component: /about/about-list.component.ts', () => {
  let component: AboutListComponent;
  let fixture: ComponentFixture<AboutListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AboutListComponent,
      ],
      imports: [
        MaterialModule.forRoot(),
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutListComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
