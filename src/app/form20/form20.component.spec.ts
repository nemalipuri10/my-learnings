import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Form20Component } from './form20.component';

describe('Form20Component', () => {
  let component: Form20Component;
  let fixture: ComponentFixture<Form20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Form20Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Form20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
