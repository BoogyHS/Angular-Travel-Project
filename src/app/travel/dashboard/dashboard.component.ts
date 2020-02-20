import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataStoreService } from 'kinvey-angular-sdk';
import { ICountry } from 'src/app/share/interfaces/country';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  visitedCountries: any;
  countries: ICountry[];

  constructor(public datastoreService: DataStoreService) {
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

  ngOnDestroy() {
    this.datastoreService.clearCache();
  }
}
