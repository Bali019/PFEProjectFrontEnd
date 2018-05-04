import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationsListeComponent } from './formations-liste.component';

describe('FormationsListeComponent', () => {
  let component: FormationsListeComponent;
  let fixture: ComponentFixture<FormationsListeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormationsListeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormationsListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
