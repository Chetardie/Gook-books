import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'gook-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  @Output() closeSidenav = new EventEmitter<void>();
  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  private onClose() {
    this.closeSidenav.emit();
  }

  private onLogout() {
    this.authService.logOut();
    this.router.navigate(['/login']);
    this.onClose();
  }
}
