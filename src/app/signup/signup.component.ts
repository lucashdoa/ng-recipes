import { Component, OnInit } from '@angular/core';
import * as fromApp from "../store/app.reducer"
import * as AppActions from "../store/app.actions"
import { AuthService } from 'src/app/service/auth.service';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor(
    private store: Store<fromApp.State>,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  signUpUser(user: {email: string, password: string}) {
    this.authService.signUpUser(user.email, user.password).subscribe(response => {
      console.log(response.email);
      this.store.dispatch(new AppActions.SignupSuccess({
        email: response.email,
        userId: response.localId,
        token: response.idToken,
        expirationDate: new Date(new Date().getTime() + (+response.expiresIn*1000))
      }))
      this.router.navigate(['/recipes'])
    })
  }
}
