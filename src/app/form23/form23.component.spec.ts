import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Form23Component } from './form23.component';

describe('Form23Component', () => {
  let component: Form23Component;
  let fixture: ComponentFixture<Form23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Form23Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Form23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
