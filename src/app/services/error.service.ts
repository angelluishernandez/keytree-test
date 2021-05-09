import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  error: BehaviorSubject<any> = new BehaviorSubject(null);

  constructor() {}

  handleHttpError(error: Observable<any>): void {
    error.subscribe((errorValue: HttpErrorResponse) => {
      console.log("************************")
      console.log(errorValue.status)
      switch (errorValue.status) {

        case 404: {
              console.log("Hola")
              this.error.next({
                status: errorValue.status,
                message: `User not found: ${errorValue.error.message}.\nPlease try again`,
              });
              break;
            }
            case 403: {
              this.error.next({
                status: errorValue.status,
                message: `Access Denied: ${errorValue.error.message}`,
              });
              break;
            }
            case 500: {
              this.error.next({
                status: errorValue.status,
                message: `Internal Server Error: ${errorValue.error.message}`,
              });
              break;
            }
            default: {
              this.error.next({
                status: errorValue.status,
                message: `Internal Server Error: ${errorValue.error.message}`,
              });
              break;
            }
          }

    })


    // if (error) {
    //
    // }
  }
}
