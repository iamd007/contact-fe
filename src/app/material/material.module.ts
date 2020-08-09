import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatToolbarModule
  ],
  exports : [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatToolbarModule
  ]
})
export class MaterialModule { }
