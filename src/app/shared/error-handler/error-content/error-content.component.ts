import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, } from '@angular/material/dialog';

@Component({
  selector: 'app-error-content',
  templateUrl: './error-content.component.html',
  styleUrls: ['./error-content.component.scss'],
})
export class ErrorContentComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ErrorContentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {status: number, message: string}
  ) {}

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
