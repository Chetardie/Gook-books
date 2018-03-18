import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from '../app-routing.module';
import { AuthService } from '../auth/auth.service';
import { AuthGuardService } from '../auth/auth-guard.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../shared/auth.interceptor';

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    AppRoutingModule,
    HomeComponent,
    HeaderComponent
  ],
  providers: [
    AuthService,
    AuthGuardService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ]
})
export class CoreModule {

}
