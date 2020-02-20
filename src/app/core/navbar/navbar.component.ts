import { Component, OnInit } from '@angular/core';
import { UserService } from 'kinvey-angular-sdk';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  get isLogged() { return !!this.userService.getActiveUser(); }
  get isAdmin() {
    if (this.isLogged) {
      const admin = this.userService.getActiveUser()._acl['entity']['username'];
      return admin === 'bozhidar.atanasov@abv.bg';
    }
    return false;
  }

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {

  }


  async logout() {
    try {
      await this.userService.logout();
      localStorage.clear();
      this.router.navigate(['/home']);
    } catch (error) {
      console.log(error);
    }
  }
}
