import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationContentComponent } from './formation-content.component';

describe('FormationContentComponent', () => {
  let component: FormationContentComponent;
  let fixture: ComponentFixture<FormationContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormationContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormationContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
