import { Component, OnInit } from '@angular/core';
import { UserService } from 'kinvey-angular-sdk';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
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
