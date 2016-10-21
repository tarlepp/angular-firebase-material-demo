import { TestBed, ComponentFixture } from '@angular/core/testing';
import { EntryComponent } from './entry.component';
import { By } from '@angular/platform-browser';
import { MaterialModule, MdInput } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { LocalStorageService, Ng2Webstorage } from 'ng2-webstorage';
import { Router } from '@angular/router';

describe('Component: /chat/entry/entry.component.ts', () => {
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

  it('should not allow to click submit button if no nick given (button should be disabled)', () => {
    fixture.detectChanges();

    const button = fixture.debugElement.query(By.css('button'));

    expect(button.nativeElement.disabled).toBe(true, 'submit button is not disabled');
  });

  describe('After entering nick', () => {
    it('should allow to click submit button (button should not be disabled)', () => {
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

    it('should store nick to local storage on submit', () => {
      const localStorageService = fixture.debugElement.injector.get(LocalStorageService);

      spyOn(localStorageService, 'store');

      fixture.detectChanges();

      const input: MdInput = fixture.debugElement.query(By.directive(MdInput)).componentInstance;
      const inputElement: HTMLInputElement = fixture.debugElement.query(By.css('input')).nativeElement;
      const form = fixture.debugElement.query(By.css('form'));

      // Fake a `change` event being triggered.
      inputElement.value = 'new nick';
      input._handleChange(<any> {target: inputElement});

      form.triggerEventHandler('submit', null);

      fixture.detectChanges();

      expect(localStorageService.store).toHaveBeenCalled();
    });

    it('should redirect user to chat on submit', () => {
      const router = fixture.debugElement.injector.get(Router);

      spyOn(router, 'navigateByUrl');

      fixture.detectChanges();

      const input: MdInput = fixture.debugElement.query(By.directive(MdInput)).componentInstance;
      const inputElement: HTMLInputElement = fixture.debugElement.query(By.css('input')).nativeElement;
      const form = fixture.debugElement.query(By.css('form'));

      // Fake a `change` event being triggered.
      inputElement.value = 'new nick';
      input._handleChange(<any> {target: inputElement});

      form.triggerEventHandler('submit', null);

      fixture.detectChanges();

      expect(router.navigateByUrl).toHaveBeenCalledWith('/chat');
    });
  });
});
