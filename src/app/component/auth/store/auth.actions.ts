import { Action } from "@ngrx/store";

export const LOGIN_START = '[Auth] Login Start' ;
export const LOGIN_FAIL = '[Auth] Login Fail' ;
export const LOGIN = '[Auth] login' ;
export const LOGOUT = '[Auth] logout' ;


export class login implements Action{
  readonly type = LOGIN ;
  constructor(public payload: {email: string, userId: string, token: string, expirationDate: Date}){}
}


export class logout implements Action{
  readonly type = LOGOUT ;
}

export class loginStart implements Action{
  readonly type = LOGIN_START ;
  constructor(public payload: {email: string, password: string}){}
}

export class loginFail implements Action{
  readonly type = LOGIN_FAIL ;
  constructor(public payload: string){}
}

export type AuthActions = login | logout | loginStart | loginFail ;
