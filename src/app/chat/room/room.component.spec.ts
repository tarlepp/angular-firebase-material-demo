import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RoomComponent } from './room.component';
import { Router, ActivatedRoute } from '@angular/router';
import { LocalStorageService, Ng2Webstorage } from 'ng2-webstorage';
import { FormsModule } from '@angular/forms';
import { MaterialModule, MdInput } from '@angular/material';
import { MomentModule } from 'angular2-moment';
import { By } from '@angular/platform-browser';

class StubLocalStorageService { }

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
  let fixture: ComponentFixture<RoomComponent>;

  beforeEach(() => {
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
    });

    fixture = TestBed.createComponent(RoomComponent);
  });

  it('should create the component', async(() => {
    let component = fixture.debugElement.componentInstance;

    expect(component).toBeTruthy();
  }));

  it('should not allow to click submit button if no message given (button should be disabled)', () => {
    fixture.detectChanges();

    const button: HTMLButtonElement = fixture.debugElement.query(By.css('button')).nativeElement;

    expect(button.disabled).toBe(true, 'submit button is not disabled');
  });

  describe('After entering message', () => {
    it('should allow to click submit button (button should not be disabled)', () => {
      fixture.detectChanges();

      const input: MdInput = fixture.debugElement.query(By.directive(MdInput)).componentInstance;
      const inputElement: HTMLInputElement = fixture.debugElement.query(By.css('input')).nativeElement;
      const button: HTMLButtonElement = fixture.debugElement.query(By.css('button')).nativeElement;

      // Fake a `change` event being triggered.
      inputElement.value = 'awesome message!';
      input._handleChange(<any> {target: inputElement});

      fixture.detectChanges();

      expect(button.disabled).toBe(false, 'submit button is not enabled');
    });
  });
});
