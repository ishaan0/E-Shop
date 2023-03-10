import { Component, OnInit } from '@angular/core';
import * as fromApp from 'src/app/app.reducer'
import { Store } from '@ngrx/store';
import * as AuthActions from 'src/app/component/auth/store/auth.actions'
import { map } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isAuthenticated: boolean = false ;
  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {
    this.store.select('auth').pipe(map(authState =>{
      return authState.user ;
    })).subscribe(user => {
      this.isAuthenticated = !!user;
    })
  }

  onLogout(){
    this.store.dispatch(new AuthActions.logout()) ;
  }

}
