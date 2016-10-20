import { TestBed, ComponentFixture } from '@angular/core/testing';
import { EntryComponent } from './entry.component';
import { By } from '@angular/platform-browser';
import { MaterialModule, MdInput } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { LocalStorageService, Ng2Webstorage } from 'ng2-webstorage';
import { Router } from '@angular/router';

describe('Component: Entry', () => {
  let fixture: ComponentFixture<EntryComponent>;

  beforeEach(() => {
    const fakeLocalStorageService = {
      store: (nick: string) => nick,
    };

    const fakeRouter = {
      navigateByUrl: (url: string) => url,
    };

    TestBed.configureTestingModule({
      declarations: [
        EntryComponent,
      ],
      imports: [
        FormsModule,
        Ng2Webstorage,
        MaterialModule.forRoot(),
      ],
      providers: [
        {
          provide: LocalStorageService,
          useValue: fakeLocalStorageService,
        },
        {
          provide: Router,
          useValue: fakeRouter,
        },
      ]
    });

    fixture = TestBed.createComponent(EntryComponent);
  });

  it('does not allow to click submit button if no nick given', () => {
    fixture.detectChanges();

    const button = fixture.debugElement.query(By.css('button'));

    expect(button.nativeElement.disabled).toBe(true, 'submit button is not disabled');
  });

  describe('After entering nick', () => {
    it('submit button should be enabled', () => {
      fixture.detectChanges();

      const input: MdInput = fixture.debugElement.query(By.directive(MdInput)).componentInstance;
      const inputElement: HTMLInputElement = fixture.debugElement.query(By.css('input')).nativeElement;
      const button: HTMLButtonElement = fixture.debugElement.query(By.css('button')).nativeElement;

      // Fake a `change` event being triggered.
      inputElement.value = 'new nick';
      input._handleChange(<any> {target: inputElement});

      fixture.detectChanges();

      expect(button.disabled).toBe(false, 'submit button is not enabled');
    });
  });
});
