import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddOccasionComponent } from './AddOccasion/AddOccasion.component';
import { AppModule } from './app.module';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: 'add', component: AddOccasionComponent }
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})

export class AppRoutingModule {

}