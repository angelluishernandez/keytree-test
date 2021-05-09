import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ErrorHandlerComponent } from './error-handler.component';
import { ErrorContentComponent } from './error-content/error-content.component';

@NgModule({
  declarations: [ErrorHandlerComponent, ErrorContentComponent],
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  exports: [ErrorHandlerComponent],
})
export class ErrorHandlerModule {}
