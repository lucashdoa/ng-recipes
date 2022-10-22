import { Action } from "@ngrx/store";
import { User } from "../model/user.model";

import * as AppActions from "./app.actions"

export interface State {
  user: User;
  authError: string;
  loading: boolean;
  isAuthenticated: false;
}

const initialState: State = {
  user: null,
  authError: null,
  loading: false,
  isAuthenticated: false
}

export function appReducer(state = initialState, action): any {
  switch(action.type) {
    case AppActions.SIGNUP_SUCCESS:
    case AppActions.SIGNIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        user: new User(
          action.payload.email,
          action.payload.userId,
          action.payload.token,
          action.payload.tokenExpirationDate    
        )
      }
    case AppActions.LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        user: null
      }
    default:
      return state;
  }
}