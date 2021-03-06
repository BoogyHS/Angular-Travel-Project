import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataStoreService, Query } from 'kinvey-angular-sdk';
import { GoogleMapComponent } from '../google-map/google-map.component';
import { ICountry } from 'src/app/share/interfaces/country';
import { ICity } from 'src/app/share/interfaces/city';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  countryDetails: any;
  country: ICountry;
  cities: ICity[];
  currentCity: ICity;

  constructor(
    private route: ActivatedRoute,
    datastoreService: DataStoreService
  ) {
    this.countryDetails = datastoreService.collection('visitedCities');
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.country = params['country'];
      const query = new Query();
      query.equalTo('country', this.country);
      this.countryDetails.find(query)
        .subscribe((cities) => {
          this.cities = cities;
          console.log(cities);
        }, (error) => {
          console.log(error)
        });
    })
  }

  selected(city) {
    this.currentCity = city;
  }

}
