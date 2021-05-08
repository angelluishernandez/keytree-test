import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomContentComponent } from './custom-content.component';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CustomContentComponent],
  imports: [CommonModule, MatButtonModule, RouterModule],
  exports: [CustomContentComponent],
})
export class CustomContentModule {}
