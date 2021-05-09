import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { ErrorService } from 'src/app/services/error.service';
import { ErrorContentComponent } from './error-content/error-content.component';

@Component({
  selector: 'app-error-handler',
  templateUrl: './error-handler.component.html',
  styleUrls: ['./error-handler.component.scss'],
})
export class ErrorHandlerComponent implements OnInit, OnDestroy {
  error = {};
  errorSubscription: Subscription;

  constructor(private errorService: ErrorService, public dialog: MatDialog) {}

  ngOnInit(): void {
    // tslint:disable-next-line: deprecation
    this.errorService.errorSubs.subscribe((error) => {
      if (error) {
        this.openDialog(error);
      }
    });
  }

  /**
   *
   * @param error
   */
  openDialog(error: { status: number; message: string }): void {
    const dialogRef = this.dialog.open(ErrorContentComponent, {
      width: '400px',
      data: {
        status: error.status,
        message: error.message,
      },
    });

    dialogRef.afterClosed().subscribe(() => {
      this.errorService.errorSubs.next(null);
    });
  }

  /**
   *
   */

  ngOnDestroy(): void {
    if (this.error) {
      this.errorSubscription.unsubscribe();
      this.errorService.errorSubs.next(null);
    }

    // Poner en el onClose del modal
  }
}
