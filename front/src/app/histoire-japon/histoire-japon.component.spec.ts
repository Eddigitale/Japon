import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoireJaponComponent } from './histoire-japon.component';

describe('HistoireJaponComponent', () => {
  let component: HistoireJaponComponent;
  let fixture: ComponentFixture<HistoireJaponComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoireJaponComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoireJaponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
