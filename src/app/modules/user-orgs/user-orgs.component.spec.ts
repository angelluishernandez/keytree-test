import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';

import { UserOrgsComponent } from './user-orgs.component';

describe('UserOrgsComponent', () => {
  let component: UserOrgsComponent;
  let fixture: ComponentFixture<UserOrgsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserOrgsComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              param: {
                data: {
                  payload: {
                    userData: {},
                    userOrgs: [],
                  },
                },
              },
            },
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserOrgsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
