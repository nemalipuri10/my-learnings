import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Form24Component } from './form24.component';

describe('Form24Component', () => {
  let component: Form24Component;
  let fixture: ComponentFixture<Form24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Form24Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Form24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
