import { NgModule, ModuleWithProviders } from '@angular/core';
import { AngularFireModule } from 'angularfire2';

import { config } from './../../config/config';
import { AuthenticationGuard } from './authentication.guard';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */
@NgModule({
  imports: [
    AngularFireModule.initializeApp(config.FIREBASE_CONFIG, config.FIREBASE_AUTH_CONFIG),
  ],
})

export class AuthenticationModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AuthenticationModule,
      providers: [
        AuthenticationGuard
      ]
    };
  }
}
