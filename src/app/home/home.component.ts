import { Component, OnInit } from '@angular/core';
import { UserService } from 'kinvey-angular-sdk';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  get isLogged() { return !!this.userService.getActiveUser(); }
  
  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  get activeUser() {
    return this.userService.getActiveUser();
  }

  async signin() {
    try {
      if (!this.activeUser){
        const user = await this.userService.login({ username: 'guest', password: 'guest' });
      }
      this.router.navigate(['/dashboard']);
    } catch (error) {
      console.log(error);
    }
  }

  async me() {
    try {
      if (this.activeUser) {
        await this.activeUser.me();
      }
      return this.activeUser;
    } catch (error) {
      console.log(error);
    }
  }
}
