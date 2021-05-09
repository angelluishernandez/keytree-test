import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomExpandableComponent } from './custom-expandable.component';
const expectedRepos = [
  {
    name: 'some repo name',
    description: 'descriptio',
    counter: { number: 100, icon: 'star' },
    content: {
      urlLink: 'Some link',
    },
  },
  {
    name: 'some other repo name',
    description: 'description',
    counter: { number: 101, icon: 'star' },
    content: {
      urlLink: 'Some other link',
    },
  },
];

const expectedExpandableDescription = 'Mock description';
describe('CustomExpandableComponent', () => {
  let component: CustomExpandableComponent;
  let fixture: ComponentFixture<CustomExpandableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomExpandableComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomExpandableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render as much expandables as items ', () => {
    component.expandableItems = expectedRepos;
    fixture.detectChanges();
    const expandables = fixture.nativeElement.querySelectorAll(
      'mat-expansion-panel'
    );
    expect(expandables.length).toBe(2);
  });

  it('should render as much expandables as items ', () => {
    component.expandableDescription = expectedExpandableDescription;
    fixture.detectChanges();
    const titleEl = fixture.nativeElement.querySelector('h1');
    expect(titleEl.textContent).toBe('Mock description');
  });

  it('expansion panel 1 title should match the name of the repo', () => {
    component.expandableItems = expectedRepos;
    fixture.detectChanges();
    const firstExpandable = fixture.nativeElement.querySelectorAll(
      'mat-panel-title'
    )[0];
    expect(firstExpandable.textContent).toBe(' some repo name ');
  });
});
