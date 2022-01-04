import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Form19Component } from './form19.component';

describe('Form19Component', () => {
  let component: Form19Component;
  let fixture: ComponentFixture<Form19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Form19Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Form19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
