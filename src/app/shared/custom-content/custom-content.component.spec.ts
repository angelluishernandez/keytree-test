import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { CustomContentComponent } from './custom-content.component';

describe('CustomContentComponent', () => {
  let component: CustomContentComponent;
  let fixture: ComponentFixture<CustomContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomContentComponent],
      imports: [RouterTestingModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              params: {
                username: '',
              },
            },
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
