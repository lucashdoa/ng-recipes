import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthService } from '../service/auth.service';
import * as fromApp from '../store/app.reducer'
import * as AppActions from '../store/app.actions'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private store: Store<{app: fromApp.State}>,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onLoginSubmit(form: NgForm) {
    console.log(form.value)
    this.authService.loginUser(form.value.email, form.value.password).subscribe(response => {
      this.store.dispatch(new AppActions.SigninSuccess({
        email: response.email,
        userId: response.localId,
        token: response.idToken,
        expirationDate: new Date(new Date().getTime() + (+response.expiresIn*1000))
      }))
      this.router.navigate(['/recipes'])
    })
  }

}
