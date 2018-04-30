import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule, MatCardModule, MatOptionModule, MatSelectModule } from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatOptionModule, MatSelectModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule, MatCardModule],
  exports: [MatButtonModule, MatOptionModule, MatSelectModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule, MatCardModule],
})
export class MaterialModule { }