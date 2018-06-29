import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';

import * as fromApp from '../../store/app.reducers';
import * as AuthActions from '../store/auth.actions';

@Component({
  selector: 'gook-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.initRegisterForm();
  }

  public onSignup(): void {
    const value = this.registerForm.getRawValue();
    this.store.dispatch(new AuthActions.TrySignup({ username: value.email, password: value.password}));
  }

  private initRegisterForm(): void {
    this.registerForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
  }

}
