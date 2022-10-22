import { Action } from "@ngrx/store";

export const SIGNUP_SUCCESS = '[Auth] Signup Success';
export const SIGNIN_SUCCESS = '[Auth] Signin Success';
export const LOGOUT = '[Auth] Logout';

export class SignupSuccess implements Action {
  readonly type = SIGNUP_SUCCESS;

  constructor(
    public payload: {
      email: string, 
      userId: string;
      token: string;
      expirationDate: Date;
    }
  ) {}
}

export class SigninSuccess implements Action {
  readonly type = SIGNIN_SUCCESS;

  constructor(
    public payload: {
      email: string, 
      userId: string;
      token: string;
      expirationDate: Date;
    }
  ) {}
}

export class Logout implements Action {
  readonly type = LOGOUT;

  constructor() {}
}