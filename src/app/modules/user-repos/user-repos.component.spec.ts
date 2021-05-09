import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { UserReposComponent } from './user-repos.component';

const userReposMock = [
  {
    clone_url: 'url',
    download_url: 'url',
    description: 'string',
    private: false,
    created_at: 'string',
    updated_at: 'string',
    html_url: 'url',
    stargazers_count: 0,
    name: 'string',
    git_url: 'url',
  },
];

describe('UserReposComponent', () => {
  let component: UserReposComponent;
  let fixture: ComponentFixture<UserReposComponent>;
  let activatedRoute: ActivatedRoute;

  const activatedRouteStub = {
    paramMap: {
      subscribe() {
        return of();
      },
    },
    snapshot: {
      data: {
        userRepos: userReposMock
      },
    },
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserReposComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: activatedRouteStub,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserReposComponent);
    component = fixture.componentInstance;
    activatedRoute = TestBed.inject(ActivatedRoute);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('userRepos should be setted on init', async () => {
    fixture.detectChanges();
    component.ngOnInit();
    expect(component.userRepos).toBe(userReposMock);
  });
});
