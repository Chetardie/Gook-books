import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';
import * as AuthActions from '../../auth/store/auth.actions';
import * as fromApp from '../../store/app.reducers';
import * as fromAuth from '../../auth/store/auth.reducers';

@Component({
  selector: 'gook-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  @Output() closeSidenav = new EventEmitter<void>();

  public authState: Observable<fromAuth.State>;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
      this.authState = this.store.select('auth');
  }

  private onClose() {
    this.closeSidenav.emit();
  }

  public onLogout() {
    this.store.dispatch(new AuthActions.Logout());
    this.onClose();
  }
}
