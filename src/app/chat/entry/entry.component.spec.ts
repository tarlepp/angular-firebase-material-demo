import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MaterialModule } from '@angular/material';
import { LocalStorageService, Ng2Webstorage } from 'ng2-webstorage';

import 'hammerjs';

import { AnimationsService } from '../../shared/animations/index';
import { EntryComponent } from './entry.component';

describe('Component: /chat/entry/entry.component.ts', () => {
  let component: EntryComponent;
  let fixture: ComponentFixture<EntryComponent>;

  beforeEach(async(() => {
    const fakeLocalStorageService = {
      store: (nick: string) => nick,
    };

    const fakeRouter = {
      navigate: (commands: any) => commands,
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
        AnimationsService,
        {
          provide: LocalStorageService,
          useValue: fakeLocalStorageService,
        },
        {
          provide: Router,
          useValue: fakeRouter,
        },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should not allow to click submit button if no nick given (button should be disabled)', () => {
    const button = fixture.debugElement.query(By.css('button'));

    expect(button.nativeElement.disabled).toBe(true, 'submit button is not disabled');
  });

  describe('After entering nick', () => {
    it('should allow to click submit button (button should not be disabled)', () => {
      const inputElement: HTMLInputElement = fixture.debugElement.query(By.css('input')).nativeElement;
      const button: HTMLButtonElement = fixture.debugElement.query(By.css('button')).nativeElement;

      // Fake a `change` event being triggered.
      inputElement.value = 'new nick';

      fixture.detectChanges();

      expect(button.disabled).toBe(false, 'submit button is not enabled');
    });

    it('should store nick to local storage on submit', () => {
      const localStorageService = fixture.debugElement.injector.get(LocalStorageService);
      const inputElement: HTMLInputElement = fixture.debugElement.query(By.css('input')).nativeElement;
      const form = fixture.debugElement.query(By.css('form'));

      spyOn(localStorageService, 'store');

      // Fake a `change` event being triggered.
      inputElement.value = 'new nick';

      form.triggerEventHandler('submit', null);

      fixture.detectChanges();

      expect(localStorageService.store).toHaveBeenCalled();
    });

    it('should redirect user to chat on submit', () => {
      const router = fixture.debugElement.injector.get(Router);
      const inputElement: HTMLInputElement = fixture.debugElement.query(By.css('input')).nativeElement;
      const form = fixture.debugElement.query(By.css('form'));

      spyOn(router, 'navigate');

      // Fake a `change` event being triggered.
      inputElement.value = 'new nick';

      form.triggerEventHandler('submit', null);

      fixture.detectChanges();

      expect(router.navigate).toHaveBeenCalledWith(['/chat']);
    });
  });
});
