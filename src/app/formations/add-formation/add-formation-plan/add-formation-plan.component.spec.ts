import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFormationPlanComponent } from './add-formation-plan.component';

describe('AddFormationPlanComponent', () => {
  let component: AddFormationPlanComponent;
  let fixture: ComponentFixture<AddFormationPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFormationPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFormationPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
