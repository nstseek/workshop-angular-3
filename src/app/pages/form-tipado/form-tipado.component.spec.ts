import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTipadoComponent } from './form-tipado.component';

describe('FormTipadoComponent', () => {
  let component: FormTipadoComponent;
  let fixture: ComponentFixture<FormTipadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormTipadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTipadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
