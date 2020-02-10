import { Component, OnInit } from '@angular/core';
import { UserService } from 'kinvey-angular-sdk';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }
  get activeUser() {
    return this.userService.getActiveUser();
  }

  async signin() {
    try {
      const user = await this.userService.login({ username: 'guest', password: 'guest' });
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
