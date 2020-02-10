import { Component, OnInit } from '@angular/core';
import { DataStoreService } from 'kinvey-angular-sdk';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  visitedCountries: any;
  countries: any;

  constructor(datastoreService: DataStoreService) {
    this.visitedCountries = datastoreService.collection('visitedCountries');
  }

  ngOnInit() {
    this.visitedCountries.find()
      .subscribe((countries) => {
        this.countries = countries;
        console.log(countries);

      }, (error) => {
        console.log(error);
      });
  }
}
