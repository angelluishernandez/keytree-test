import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { Location } from '@angular/common';

describe('AppComponent', () => {
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        RouterTestingModule.withRoutes([{ path: '', component: AppComponent }]),
      ],
      declarations: [AppComponent, LayoutComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    router = TestBed.inject(Router);
  });
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'keytree-test'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('keytree-test');
  });

  it('should have a layout component and a router-outlet', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-layout')).not.toBe(null);
    expect(compiled.querySelector('router-outlet')).not.toBe(null);
  });

  it('should redirect to / each time it is initialized', fakeAsync(() => {
    router.navigate(['']);
    tick();
    const location: Location = TestBed.inject(Location);
    expect(location.path()).toBe('/');
  }));
});
