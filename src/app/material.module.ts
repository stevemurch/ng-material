import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatIconModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule, MatCardModule, MatOptionModule, MatSelectModule } from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatIconModule, MatOptionModule, MatSelectModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule, MatCardModule],
  exports: [MatButtonModule, MatIconModule, MatOptionModule, MatSelectModule, MatToolbarModule, MatInputModule, MatProgressSpinnerModule, MatCardModule],
})
export class MaterialModule { }