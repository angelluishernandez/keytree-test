import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [LayoutComponent],
  imports: [CommonModule, MatToolbarModule],
  exports: [LayoutComponent],
})
export class LayoutModule {}
