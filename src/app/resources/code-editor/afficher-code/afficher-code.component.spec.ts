import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherCodeComponent } from './afficher-code.component';

describe('AfficherCodeComponent', () => {
  let component: AfficherCodeComponent;
  let fixture: ComponentFixture<AfficherCodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfficherCodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficherCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
