import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MaterialModule } from './material.module';
import {MatIconModule} from '@angular/material/icon';
import { LoginComponent } from './login/login.component';
import { AuthGuard, SSOGuardService } from './_guards/index';
import { AlertService, AuthenticationService, DataService, PersonService } from './_services/index';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AlertComponent } from './_directives/index';
import { PersonComponent } from './person/person.component';
import { Router } from '@angular/router';
import { accessTokenOpt, refreshTokenOpt } from './shared/jwt/jwt-options';
import { RefreshTokenModule, JwtModule, REFRESH_TOKEN_OPTIONS, JWT_OPTIONS } from '@palmyra/angular-jwt-security';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    AlertComponent,
    PersonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatIconModule,
    RefreshTokenModule.forRoot(refreshTokenOpt),
    JwtModule.forRoot(accessTokenOpt)
  ],
  providers: [DataService,
    AuthGuard,
    AlertService,
    SSOGuardService,
    PersonService,
    AuthenticationService,   
    {provide: JWT_OPTIONS, useValue: accessTokenOpt},  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
