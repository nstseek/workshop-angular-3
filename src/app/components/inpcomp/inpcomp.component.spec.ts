import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InpcompComponent } from './inpcomp.component';

describe('InpcompComponent', () => {
  let component: InpcompComponent;
  let fixture: ComponentFixture<InpcompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InpcompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InpcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
