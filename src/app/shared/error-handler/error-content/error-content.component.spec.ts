import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

import { ErrorContentComponent } from './error-content.component';

describe('ErrorContentComponent', () => {
  let component: ErrorContentComponent;
  let fixture: ComponentFixture<ErrorContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ErrorContentComponent],
      imports: [MatDialogModule],
      providers: [
        {
          provide: MatDialogRef,
          useValue: {},
        },
        { provide: MAT_DIALOG_DATA, useValue: {} },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
