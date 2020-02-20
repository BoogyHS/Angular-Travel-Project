import { Component, OnInit } from '@angular/core';
import { UserService } from 'kinvey-angular-sdk';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit() {
  }

  clicked(){
    const admin = this.userService.getActiveUser()._acl['entity']['username'];

    console.log(admin);
  }
}
