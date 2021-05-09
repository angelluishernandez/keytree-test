import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { UserData } from 'src/app/interfaces/user-data';
import { UserOrganization } from 'src/app/interfaces/user-organition';
import { UserOrgsComponent } from './user-orgs.component';
const userData: UserData = {
  avatar_url: 'avatar',
  bio: 'bio',
  blog: 'blogblog',
  company: 'company',
  created_at: 'date',
  email: 'email@email',
  followers: 0,
  following: 0,
  hireable: false,
  login: 'name',
  organizations_url: 'url',
  public_repos: 0,
  public_gists: 0,
  repos_url: 'url',
  twitter_username: 'twitter_name',
  type: 'type1',
  updated_at: 'date2',
  html_url: 'url',
};

const dummyData: Array<UserOrganization> = [
  {
    avatar_url: 'some avatar',
    created_at: 'date',
    description: 'description',
    id: 1,
    login: 'name',
    public_members_url: 'url',
    repos_url: 'url',
    url: 'url',
  },
  {
    avatar_url: 'some avatar2',
    created_at: 'date2',
    description: 'description2',
    id: 21,
    login: 'name2',
    public_members_url: 'url2',
    repos_url: 'url2',
    url: 'url2',
  },
];

describe('UserOrgsComponent', () => {
  let component: UserOrgsComponent;
  let fixture: ComponentFixture<UserOrgsComponent>;
  let activatedRoute: ActivatedRoute;

  const activatedRouteStub = {
    paramMap: {
      subscribe() {
        return of();
      },
    },
    snapshot: {
      data: {
        payload: {
          userData: userData,
          userOrgs: dummyData,
        },
      },
    },
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserOrgsComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: activatedRouteStub,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserOrgsComponent);
    component = fixture.componentInstance;
    activatedRoute = TestBed.inject(ActivatedRoute);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display user orgs data after clicking in second tab', async () => {
    fixture.nativeElement.querySelectorAll('mat-tab')[1].click();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(
        fixture.nativeElement.querySelector('.user-organizations')
      ).toBeTruthy();
    });
  });

  it('should display user data and its content after clicking in first tab', async () => {
    fixture.nativeElement.querySelectorAll('mat-tab')[0].click();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(fixture.nativeElement.querySelector('.user-name')).toBeTruthy();
      expect(
        fixture.nativeElement.querySelector('app-custom-content')
      ).toBeTruthy();
    });
  });

  it('userOrgs  should be setted on init', async () => {
    fixture.detectChanges();
    component.ngOnInit();
    expect(component.userOrgs).toBe(dummyData);
  });

  it('userData should be setted on init', async () => {
    fixture.detectChanges();
    component.ngOnInit();
    expect(component.userData).toBe(userData);
  });
});
