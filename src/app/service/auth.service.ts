import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from 'src/app/app.reducer';
import * as AuthActions from 'src/app/component/auth/store/auth.actions';

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiKey: string = 'AIzaSyCTtj2KFuZg6DtO81xnLAiy_gBeM9i_H4Q';
  private tokenExpirationTimer: any;

  constructor(
    private store: Store<fromApp.AppState>
  ) {}

  setLogoutTimer(expirationDuration: number) {
    this.tokenExpirationTimer = setTimeout(() => {
      this.store.dispatch(new AuthActions.logout()) ;
    }, expirationDuration);
  }

  clearLogoutTimer(){
    if(this.tokenExpirationTimer){
      clearTimeout(this.tokenExpirationTimer) ;
      this.tokenExpirationTimer = null ;
    }
  }

}
