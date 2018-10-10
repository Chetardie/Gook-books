import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'gook-auth-form',
    styleUrls: ['./auth-form.component.scss'],
    templateUrl: './auth-form.component.html'
})
export class AuthFormComponent implements OnInit {
    @Output() submitted: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
    public authForm: FormGroup;

    constructor() {
    }

    ngOnInit() {
        this.initForm();
    }

    public onSubmit(): void {
        this.submitted.emit(this.authForm);
    }

    private initForm(): void {
        this.authForm = new FormGroup({
          email: new FormControl(null, [Validators.required, Validators.email, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
          password: new FormControl(null, [Validators.required, Validators.minLength(6)])
        });
    }
}
