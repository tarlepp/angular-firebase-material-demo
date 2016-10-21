import { TestBed, inject} from '@angular/core/testing';
import { NickResolver } from './nick.resolver';
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

describe('Resolver: /chat/room/resolves/nick.resolver.ts', () => {
  const route: any = {};
  const state: any = {};

   beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        NickResolver,
        {
          provide: LocalStorageService,
          useClass: StubLocalStorageService,
        },
      ],
    });
  });

  it('should return nick when it is on local storage', inject(
    [NickResolver, LocalStorageService],
    (resolver: NickResolver, storage: LocalStorageService) => {
      storage.store('nick', 'foo');

      expect(resolver.resolve(route, state)).toEqual('foo', 'Stored nick in the local storage is not expected one.');
    })
  );

  it('should not return nick when it is not on local storage', inject([NickResolver], (resolver: NickResolver) => {
      expect(resolver.resolve(route, state)).toBeUndefined('Nick is not in local storage but resolver found something.');
    })
  );
});
