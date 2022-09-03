import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/service/auth.service';
import * as fromApp from 'src/app/app.reducer';
import { Store } from '@ngrx/store';
import * as AuthActions from 'src/app/component/auth/store/auth.actions'

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit, OnDestroy {
  storeSubcription: Subscription ;
  isLoginMode: boolean = false;
  isLoading: boolean = false;
  error: string = null;
  constructor(
    private store: Store<fromApp.AppState>
  ) {}

  ngOnInit(): void {
    this.storeSubcription = this.store.select('auth').subscribe(authState =>{
      this.isLoading = authState.loading ;
      this.error = authState.authError ;
    });
  }

  ngOnDestroy(): void {
    this.storeSubcription.unsubscribe() ;
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) return;
    const email = form.value.email;
    const password = form.value.password;

    if (this.isLoginMode) {
      this.store.dispatch(new AuthActions.loginStart({email: email, password: password})) ;
    } else {
      this.store.dispatch(new AuthActions.signupStart({email: email, password: password})) ;
    }

    form.reset();
  }
}
