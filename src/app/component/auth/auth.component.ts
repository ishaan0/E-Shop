import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthResponseData, AuthService } from 'src/app/service/auth.service';
import * as fromApp from 'src/app/app.reducer';
import { Store } from '@ngrx/store';
import * as AuthActions from 'src/app/component/auth/store/auth.actions'

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  isLoginMode: boolean = false;
  isLoading: boolean = false;
  error: string = null;
  constructor(
    private authService: AuthService,
    private router: Router,
    private store: Store<fromApp.AppState>
  ) {}

  ngOnInit(): void {
    this.store.select('auth').subscribe(authState =>{
      this.isLoading = authState.loading ;
      this.error = authState.authError ;
      // if(this.error){
      //   this.showErrorAlert(this.error) ;
      // }
    });
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) return;
    const email = form.value.email;
    const password = form.value.password;
    this.isLoading = true;

    let authObs: Observable<AuthResponseData>;

    if (this.isLoginMode) {
      // authObs = this.authService.login(email, password);
      this.store.dispatch(new AuthActions.loginStart({email: email, password: password})) ;
    } else {
      authObs = this.authService.signup(email, password);
    }



    // authObs.subscribe(
    //   (resData) => {
    //     this.isLoading = false;
    //     this.router.navigate(['/products']);
    //   },
    //   (errorMessage) => {
    //     this.error = errorMessage;
    //     this.isLoading = false;
    //   }
    // );

    form.reset();
  }
}
