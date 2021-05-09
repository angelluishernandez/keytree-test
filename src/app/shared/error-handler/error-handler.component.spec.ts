import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';

import { ErrorHandlerComponent } from './error-handler.component';

describe('ErrorHandlerComponent', () => {
  let component: ErrorHandlerComponent;
  let fixture: ComponentFixture<ErrorHandlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatDialogModule],
      declarations: [ ErrorHandlerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
