import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutcompComponent } from './outcomp.component';

describe('OutcompComponent', () => {
  let component: OutcompComponent;
  let fixture: ComponentFixture<OutcompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutcompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
