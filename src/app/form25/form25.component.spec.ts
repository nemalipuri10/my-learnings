import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Form25Component } from './form25.component';

describe('Form25Component', () => {
  let component: Form25Component;
  let fixture: ComponentFixture<Form25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Form25Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Form25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
