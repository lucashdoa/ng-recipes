import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupStepperComponent } from './signup-stepper.component';

describe('SignupStepperComponent', () => {
  let component: SignupStepperComponent;
  let fixture: ComponentFixture<SignupStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupStepperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
