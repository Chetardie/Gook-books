import { Component, OnInit, ContentChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';

import * as fromApp from '../../store/app.reducers';
import * as AuthActions from '../store/auth.actions';
import { AuthFormComponent } from '../auth-form/auth-form.component';

@Component({
  selector: 'gook-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.scss' ]
})
export class LoginComponent implements OnInit {
  @ContentChild(AuthFormComponent) authFormComponent: AuthFormComponent;

  constructor(private store: Store<fromApp.AppState>) {
  }

  ngOnInit() {
  }

  public onLogin(event: FormGroup): void {
    const { email, password } = event.value;
    this.store.dispatch(new AuthActions.TrySignin({ username: email, password: password }));
  }
}
