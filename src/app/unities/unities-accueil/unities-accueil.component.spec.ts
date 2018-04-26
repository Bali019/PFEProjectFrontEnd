import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitiesAccueilComponent } from './unities-accueil.component';

describe('UnitiesAccueilComponent', () => {
  let component: UnitiesAccueilComponent;
  let fixture: ComponentFixture<UnitiesAccueilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitiesAccueilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitiesAccueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
