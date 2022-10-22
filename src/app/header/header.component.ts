import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromApp from '../store/app.reducer'
import * as AppActions from '../store/app.actions'
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isAuthenticated: Observable<boolean>;

  constructor(
    private store: Store<{app: fromApp.State}>,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.isAuthenticated = this.store.select((state) => state.app.isAuthenticated);
  }

  onLogout() {
    this.store.dispatch(new AppActions.Logout());
    this.router.navigate(['/']);
  }

}
