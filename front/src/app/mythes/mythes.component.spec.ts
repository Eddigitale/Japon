import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MythesComponent } from './mythes.component';

describe('MythesComponent', () => {
  let component: MythesComponent;
  let fixture: ComponentFixture<MythesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MythesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MythesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
