import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'gook-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.initRegisterForm();
  }

  private initRegisterForm(): void {
    this.registerForm = this.formBuilder.group({
      email: [null, Validators.email],
      password: [null, Validators.minLength(6)]
    });
  }

  private onSignup() {
    const value = this.registerForm.getRawValue();
    this.authService.registerUser(value.email, value.password);
  }

}
