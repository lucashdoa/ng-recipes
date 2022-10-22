import { Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-signup-stepper',
  templateUrl: './signup-stepper.component.html',
  styleUrls: ['./signup-stepper.component.css']
})
export class SignupStepperComponent {
  @Output() createUserEvent = new EventEmitter<{email: string, password: string}>;

  email = this._formBuilder.group({
    emailInput: ['', Validators.required],
  });
  password = this._formBuilder.group({
    passwordInput: ['', Validators.required],
  });
  fourthFormGroup = this._formBuilder.group({
    fourthCtrl: ['', Validators.required],
  });

  constructor(
    private _formBuilder: FormBuilder
  ) {}

  onClickRegister() {
    this.createUserEvent.emit({
      email: this.email.controls['emailInput'].value,
      password: this.password.controls['passwordInput'].value
    })
  }
}
