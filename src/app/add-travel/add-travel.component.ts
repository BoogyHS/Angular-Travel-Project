import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataStoreService, Query } from 'kinvey-angular-sdk';

@Component({
  selector: 'app-add-travel',
  templateUrl: './add-travel.component.html',
  styleUrls: ['./add-travel.component.scss']
})
export class AddTravelComponent implements OnInit, OnDestroy {

  form: FormGroup;
  countriesCollection: any;
  citiesCollection: any;
  countries: any;
  cities: any;
  selectedCountry: any;
  selectedCity: any;
  visitedCitiesCollection: any;
  visitedCountriesCollection: any;
  isCountryVisited: boolean;
  isCityVisited: boolean;

  constructor(
    private fb: FormBuilder,
    datastoreService: DataStoreService
  ) {
    this.form = this.fb.group({
      countrySelect: ['', [Validators.required]],
      citySelect: ['', [Validators.required]],
      text: ['', [Validators.required]],
    });

    this.countriesCollection = datastoreService.collection('countriesArr');
    this.citiesCollection = datastoreService.collection('citiesArr');
    this.visitedCitiesCollection = datastoreService.collection('visitedCities');
    this.visitedCountriesCollection = datastoreService.collection('visitedCountries');
  }

  ngOnInit() {

    const query = new Query();
    query.ascending('country');
    query.fields = ['country'];
    this.countriesCollection.find(query)
      .subscribe((countries) => {
        this.countries = countries;
        // console.log(countries);
      }, (error) => {
        console.log(error);
      });
  }

  changeSelectedCountry() {
    this.selectedCountry = JSON.parse(this.form.get('countrySelect').value);
    this.selectedCity = undefined;

    const query = new Query();
    query.ascending('city_ascii');
    query.equalTo('country', this.selectedCountry.country);
    this.citiesCollection.find(query)
      .subscribe((cities) => {
        this.cities = cities;
        // console.log(cities);
      }, (error) => {
        console.log(error);
      });

    const query2 = new Query();
    query2.equalTo('country', this.selectedCountry.country);
    this.visitedCountriesCollection.find(query2)
      .subscribe((visitedCountry) => {
        this.isCountryVisited = visitedCountry.length === 1;
      }, (error) => {
        console.log(error);
      });
  }

  changeSelectedCity($event) {
    this.selectedCity = JSON.parse(this.form.get('citySelect').value);
    const id = this.selectedCity.id;

    const query = new Query();
    query.equalTo('id', id);
    this.visitedCitiesCollection.find(query)
      .subscribe((visited) => {
        this.isCityVisited = visited.length === 1;
        console.log(visited);
      }, (error) => {
        console.log(error);
      });
  }

  ngOnDestroy() {
  }
}

// _id: "5e3d7c9e9658f50016c7137f"
// city: "Saint John’s"
// city_ascii: "Saint John's"
// lat: 17.118
// lng: -61.85
// iso2: "AG"
// iso3: "ATG"
// country: "Antigua And Barbuda"
// admin_name: "Saint John"
// capital: "primary"
// population: 35499
// id: 1028912067

