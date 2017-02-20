import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { Router, ActivatedRoute } from '@angular/router';
import { LocalStorageService, Ng2Webstorage } from 'ng2-webstorage';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { MomentModule } from 'angular2-moment';
import { By } from '@angular/platform-browser';

import { AnimationsService } from '../../shared/animations/index';
import { RoomComponent } from './room.component';

class StubLocalStorageService {
  private data = {};

  store(key: string, value: any): void {
    this.data[key] = value;
  }

  retrieve(key: string): any {
    return this.data[key];
  }
}

class StubActivatedRoute {
  public data = {
    subscribe: StubActivatedRoute.subscribe
  };

  static subscribe() {
    return {
      messages: [],
      nick: 'foo bar',
    };
  }
}

describe('Component: /chat/room/room.component.ts', () => {
  let component: RoomComponent;
  let fixture: ComponentFixture<RoomComponent>;

  beforeEach(async(() => {
    const fakeRouter = {
      navigateByUrl: (url: string) => url,
    };

    TestBed.configureTestingModule({
      declarations: [
        RoomComponent,
      ],
      imports: [
        FormsModule,
        Ng2Webstorage,
        MomentModule,
        MaterialModule.forRoot(),
      ],
      providers: [
        AnimationsService,
        {
          provide: Router,
          useValue: fakeRouter,
        },
        {
          provide: ActivatedRoute,
          useClass: StubActivatedRoute,
        },
        {
          provide: LocalStorageService,
          useClass: StubLocalStorageService,
        },
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create the component', async(() => {
    expect(fixture.debugElement.componentInstance).toBeTruthy();
  }));

  it('should not allow to click submit button if no message given (button should be disabled)', () => {
    const button: HTMLButtonElement = fixture.debugElement.query(By.css('button')).nativeElement;

    expect(button.disabled).toBe(true, 'submit button is not disabled');
  });

  describe('After entering message', () => {
    it('should allow to click submit button (button should not be disabled)', () => {
      const inputElement: HTMLInputElement = fixture.debugElement.query(By.css('input')).nativeElement;
      const button: HTMLButtonElement = fixture.debugElement.query(By.css('button')).nativeElement;

      // Fake a `change` event being triggered.
      inputElement.value = 'awesome message!';

      fixture.detectChanges();

      expect(button.disabled).toBe(false, 'submit button is not enabled');
    });
  });
});
