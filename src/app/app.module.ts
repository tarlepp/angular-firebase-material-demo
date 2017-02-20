import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { LayoutModule } from './layout/layout.module';
import { AboutModule } from './about/about.module';
import { LoginModule } from './login/login.module';
import { TodosModule } from './todos/todos.module';
import { ChatModule } from './chat/chat.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    SharedModule,
    LayoutModule,
    AboutModule,
    LoginModule,
    TodosModule,
    ChatModule,
  ],
  bootstrap: [
    AppComponent,
  ],
})

export class AppModule { }
