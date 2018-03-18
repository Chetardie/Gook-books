import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'gook-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.scss' ]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private authService: AuthService, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.initLoginForm();
  }

  private initLoginForm(): void {
    this.loginForm = this.formBuilder.group({
      Email: [null, Validators.email],
      Password: [null, Validators.minLength(6)]
    });
  }

  onSignin() {
    const email = this.loginForm.value.Email;
    const password = this.loginForm.value.Password;
    this.authService.loginUser(email, password);
  }

}
