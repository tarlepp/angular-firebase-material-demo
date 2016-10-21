import { TestBed, inject} from '@angular/core/testing';
import { EntryGuard } from './entry.guard';
import { Router } from '@angular/router';
import { LocalStorageService } from 'ng2-webstorage';

class StubLocalStorageService {
  private data = {};

  store(key: string, value: any): void {
    this.data[key] = value;
  }

  retrieve(key: string): any {
    return this.data[key];
  }
}

describe('Guard: /chat/entry/guards/entry.guard.ts', () => {
  const route: any = {};
  const state: any = {};

  beforeEach(() => {
    const fakeRouter = {
      navigateByUrl: (url: string) => url,
    };

    TestBed.configureTestingModule({
      providers: [
        EntryGuard,
        {
          provide: LocalStorageService,
          useClass: StubLocalStorageService,
        },
        {
          provide: Router,
          useValue: fakeRouter,
        },
      ],
    });
  });

  it('should return true if nick isn\'t in local storage', inject([EntryGuard], (guard: EntryGuard) => {
    expect(guard.canActivate(route, state)).toBeTruthy();
  }));

  it('should return false if nick is in local storage', inject(
    [EntryGuard, LocalStorageService],
    (guard: EntryGuard, storage: LocalStorageService) => {
      storage.store('nick', 'foo');

      expect(guard.canActivate(route, state)).not.toBeTruthy();
    })
  );

  it('should redirect user if nick is in local storage', inject(
    [EntryGuard, LocalStorageService, Router],
    (guard: EntryGuard, storage: LocalStorageService, router: Router) => {
      spyOn(router, 'navigateByUrl');

      storage.store('nick', 'foo');

      guard.canActivate(route, state);

      expect(router.navigateByUrl).toHaveBeenCalledWith('/chat');
    })
  );
});
