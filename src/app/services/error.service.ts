import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  errorSubs: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor() {}

  handleHttpError(error: HttpErrorResponse): void {
    switch (error.status) {
      case 404: {
        this.errorSubs.next({
          status: error.status,
          message: `User not found: Please try again`,
        });
        break;
      }
      case 403: {
        this.errorSubs.next({
          status: error.status,
          message: `Access Denied: ${error.error.message}`,
        });
        break;
      }
      case 500: {
        this.errorSubs.next({
          status: error.status,
          message: `Internal Server Error: ${error.error.message}`,
        });
        break;
      }
      default: {
        this.errorSubs.next({
          status: error.status,
          message: 'An unexpected error ocurred',
        });
        break;
      }
    }
  }
}
