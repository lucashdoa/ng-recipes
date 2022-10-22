import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable, Subscription } from 'rxjs';
import { User } from '../model/user.model';
import * as fromApp from '../store/app.reducer'

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  isAuthenticated = false;
  user: Observable<User> = null;
  private userSub: Subscription;

  constructor(
    private store: Store<{app: fromApp.State}>
  ) { }

  ngOnInit(): void {
    this.user = this.store.select((state) => state.app.user);
  }
  

}
