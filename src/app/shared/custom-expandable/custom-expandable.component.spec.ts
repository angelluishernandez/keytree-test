import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomExpandableComponent } from './custom-expandable.component';

describe('CustomExpandableComponent', () => {
  let component: CustomExpandableComponent;
  let fixture: ComponentFixture<CustomExpandableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomExpandableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomExpandableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    console.log("component.expandableItems", component.expandableItems)
    expect(component).toBeTruthy();
  });
});
