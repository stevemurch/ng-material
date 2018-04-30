import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddOccasionComponent } from './AddOccasion/AddOccasion.component';
import { AppModule } from './app.module';
import { CommonModule } from '@angular/common';
import { PeopleComponent } from './people/people.component';
import { HomeComponent } from './home/home.component';

export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'add', component: AddOccasionComponent },
  { path: 'people', component: PeopleComponent }
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})

export class AppRoutingModule {

}