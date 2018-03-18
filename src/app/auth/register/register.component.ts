import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../auth.service';

@Component({
  selector: 'gook-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private authService: AuthService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initRegisterForm();
  }

  private initRegisterForm(): void {
    this.registerForm = this.formBuilder.group({
      Email: [null, Validators.email],
      Password: [null, Validators.minLength(6)]
    });
  }

  onSignup() {
    const email = this.registerForm.value.Email;
    const password = this.registerForm.value.Password;
    this.authService.registerUser(email, password);
  }

}
