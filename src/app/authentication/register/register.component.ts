import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'kinvey-angular-sdk';

function MatchPassword(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];

    if (matchingControl.errors && !matchingControl.errors.mustMatch) {
      return;
    }

    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ mustMatch: true });
    } else {
      matchingControl.setErrors(null);
    }
  }
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.registerForm = this.fb.group({
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      rePassword: ['', [Validators.required]]
    },
      { validator: MatchPassword('password', 'rePassword') });
  }

  ngOnInit() {
    if (this.activeUser) {
      this.logout();
    }
  }

  get activeUser() {
    return this.userService.getActiveUser();
  }

  async register() {
    try {
      const user = await this.userService.signup(this.registerForm.value);
    } catch (error) {
      console.log(error);
    }
  }

  async logout() {
    try {
      await this.userService.logout();
      localStorage.clear();
    } catch (error) {
      console.log(error);
    }
  }
}
