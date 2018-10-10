import { Component, OnInit, ContentChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';

import * as fromApp from '../../store/app.reducers';
import * as AuthActions from '../store/auth.actions';
import { AuthFormComponent } from '../auth-form/auth-form.component';

@Component({
  selector: 'gook-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @ContentChild(AuthFormComponent) authFormComponent: AuthFormComponent;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
  }

  public onSignup(event: FormGroup): void {
    const { email, password } = event.value;
    this.store.dispatch(new AuthActions.TrySignup({ username: email, password: password}));
  }
}
