import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RecipesComponent } from './recipes/recipes.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      animation: 'isRight'
    }
  },
  {
    path: 'signup',
    component: SignupComponent,
    data: {
      animation: 'isLeft'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      animation: 'isLeft'
    }
  },
  {
    path: 'recipes',
    component: RecipesComponent,
    data: {
      animation: 'isLeft'
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
