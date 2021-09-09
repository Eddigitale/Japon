import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncontournablesComponent } from './incontournables.component';

describe('IncontournablesComponent', () => {
  let component: IncontournablesComponent;
  let fixture: ComponentFixture<IncontournablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncontournablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncontournablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
