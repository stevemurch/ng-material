import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http'
import { MaterialModule } from './material.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SigninComponent } from './signin/signin.component';
import { AppRoutingModule, appRoutes } from './app-routing.module';

import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider,
} from "angular5-social-login";

import { OccasionService } from './services/occasion.service';
import { HttpClientModule } from '@angular/common/http';
import { AddOccasionComponent } from './AddOccasion/AddOccasion.component';
import { PeopleComponent } from './people/people.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { OccasionInfoListComponent } from './occasion-info-list/occasion-info-list.component';

// Configs 
export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider("960561807402484")
        },
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider("500950983343-r2n274oobgivi683r09flr7iabqie0p0.apps.googleusercontent.com")
        }
      ]
  );
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    AddOccasionComponent,
    PeopleComponent,
    HomeComponent,
    OccasionInfoListComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    SocialLoginModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
    
  ],
  providers: [
    OccasionService,
    { 
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
