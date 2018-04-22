import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficherTextComponent } from './afficher-text.component';

describe('AfficherTextComponent', () => {
  let component: AfficherTextComponent;
  let fixture: ComponentFixture<AfficherTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfficherTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficherTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
