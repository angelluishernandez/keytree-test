import {
  ComponentFixture,
  fakeAsync,

  TestBed,
  tick,
} from '@angular/core/testing';
import {
  Router,
  Routes,
} from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { DashboardComponent } from './dashboard.component';
import { routes } from './dashboard.module';
import { Location } from '@angular/common';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let testRoutes: Routes = routes;
  let router: Router;
  const routerSpy = { navigate: jasmine.createSpy('navigate') };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(testRoutes)],
      declarations: [DashboardComponent],
      providers: [{ router: Router, useValue: routerSpy }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.inject(Router);
    router.initialNavigation();
  });

  it('should create with isLoading defaulting to false', () => {
    expect(component).toBeTruthy();
    expect(component.isLoading).toBe(false);
  });

  it('should return falsy if username is invalid', () => {
    component.username.setValue('');
    const button = fixture.nativeElement.querySelector('.repos-button');
    button.click();
    fixture.whenStable().then(() => {
      expect(component.handleSubmit).toHaveBeenCalledWith('user');
      expect(component.handleSubmit('user')).toBeFalsy();
    });
  });

  it('navigate to "" when initialized', fakeAsync(() => {
    router.navigate(['']);
    tick();
    const location: Location = TestBed.inject(Location);
    expect(location.path()).toBe('/');
  }));
});
