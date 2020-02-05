import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../services/countries.service';
import { ICountry } from '../models/country';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  countries: ICountry

  constructor(private userService: UsersService, private countriesService: CountriesService) { }

  ngOnInit() {
    this.userService
      .getLogin()
      .subscribe(data => {
        // this.countries = data;
        console.log(data);
      });
    this.countriesService
      .getCountries()
      .subscribe(data => {
        // this.countries = data;
        console.log(data);
      });
  }

}
