import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'

import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { SignupStepperComponent } from './signup/signup-stepper/signup-stepper.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


import * as fromApp from './store/app.reducer';
import { HttpClientModule } from '@angular/common/http';
import { RecipesComponent } from './recipes/recipes.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SignupComponent,
    SignupStepperComponent,
    LoginComponent,
    RecipesComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatGridListModule,
    MatButtonModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    StoreModule.forRoot({app: fromApp.appReducer}),
    StoreDevtoolsModule.instrument({logOnly: false}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
