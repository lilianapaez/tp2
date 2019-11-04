import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  MatInputModule,
  MatFormFieldModule,
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatDialogModule,
  MatSnackBarModule,
  MatProgressSpinnerModule,
  MatSelectModule
} from '@angular/material';

import { GenericLandingComponent } from './generic-landing/generic-landing';

@NgModule({
  declarations: [GenericLandingComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatIconModule,
    MatDialogModule,
    MatSnackBarModule,
    MatProgressSpinnerModule
  ]
})
export class ViewsModule {}
