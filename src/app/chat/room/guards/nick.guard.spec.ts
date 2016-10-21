import { TestBed, inject} from '@angular/core/testing';
import { NickGuard } from './nick.guard';
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

describe('Guard: /chat/room/guards/nick.guard.ts', () => {
  const route: any = {};
  const state: any = {};

  beforeEach(() => {
    const fakeRouter = {
      navigateByUrl: (url: string) => url,
    };

    TestBed.configureTestingModule({
      providers: [
        NickGuard,
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

  it('should return false if nick isn\'t in local storage', inject([NickGuard], (guard: NickGuard) => {
    expect(guard.canActivate(route, state)).not.toBeTruthy();
  }));

  it('should redirect user if nick isn\'t in local storage', inject(
    [NickGuard, LocalStorageService, Router],
    (guard: NickGuard, storage: LocalStorageService, router: Router) => {
      spyOn(router, 'navigateByUrl');

      guard.canActivate(route, state);

      expect(router.navigateByUrl).toHaveBeenCalledWith('/chat/entry');
    })
  );

  it('should return true if nick is in local storage', inject(
    [NickGuard, LocalStorageService],
    (guard: NickGuard, storage: LocalStorageService) => {
      storage.store('nick', 'foo');

      expect(guard.canActivate(route, state)).toBeTruthy();
    })
  );
});
