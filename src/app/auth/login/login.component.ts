import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';

import * as fromApp from '../../store/app.reducers';
import * as AuthActions from '../store/auth.actions';

@Component({
  selector: 'gook-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.scss' ]
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;

  constructor(private store: Store<fromApp.AppState>) {
  }

  ngOnInit() {
    this.initLoginForm();
  }

  public onLogin(): void {
    const value = this.loginForm.getRawValue();
    this.store.dispatch(new AuthActions.TrySignin({ username: value.email, password: value.password }));
  }

  private initLoginForm(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
  }

}
