import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'kinvey-angular-sdk';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
  ) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit() {
    if (this.activeUser) {
      this.logout();
    }
  }

  get activeUser() {
    return this.userService.getActiveUser();
  }

  async login() {
    try {
      const user = await this.userService
        .login(this.loginForm.value.username, this.loginForm.value.password);
        this.router.navigate(['/dashboard']);
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
