import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Form17Component } from './form17.component';

describe('Form17Component', () => {
  let component: Form17Component;
  let fixture: ComponentFixture<Form17Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Form17Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Form17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
