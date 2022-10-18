import { Component} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';


@Component({
  selector: 'app-signup-stepper',
  templateUrl: './signup-stepper.component.html',
  styleUrls: ['./signup-stepper.component.css']
})
export class SignupStepperComponent {
  name = this._formBuilder.group({
    nameInput: ['', Validators.required],
  });
  email = this._formBuilder.group({
    emailInput: ['', Validators.required],
  });
  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });
  fourthFormGroup = this._formBuilder.group({
    fourthCtrl: ['', Validators.required],
  });

  constructor(
    private _formBuilder: FormBuilder
  ) {}

  onRegister() {
    console.log(this.name.value)
  }
}
