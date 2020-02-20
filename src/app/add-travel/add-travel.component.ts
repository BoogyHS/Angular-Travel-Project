import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataStoreService, Query } from 'kinvey-angular-sdk';
import { ICountry } from '../share/interfaces/country';
import { ICity } from '../share/interfaces/city';

@Component({
  selector: 'app-add-travel',
  templateUrl: './add-travel.component.html',
  styleUrls: ['./add-travel.component.scss']
})
export class AddTravelComponent implements OnInit, OnDestroy {

  form: FormGroup;
  countriesCollection: any;
  citiesCollection: any;
  countries: ICountry[];
  cities: ICity[];
  selectedCountry: ICountry;
  selectedCity: ICity;
  visitedCitiesCollection: any;
  visitedCountriesCollection: any;
  isCountryVisited: boolean;
  isCityVisited: boolean;
  countrySend: boolean;
  citySend: boolean;

  constructor(
    private fb: FormBuilder,
    datastoreService: DataStoreService
  ) {
    this.form = this.fb.group({
      countrySelect: ['', [Validators.required]],
      citySelect: ['', [Validators.required]],
      pictureUrl: ['', [Validators.required]],
      description: ['', [Validators.required]],
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
    this.isCountryVisited = false;

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
        if (visitedCountry.length === 1) {
          this.selectedCountry = visitedCountry[0]; //may be a problem because of this
          this.isCountryVisited = true;
        }
      }, (error) => {
        console.log(error);
      });
  }

  changeSelectedCity($event) {
    this.selectedCity = JSON.parse(this.form.get('citySelect').value);
    const id = this.selectedCity.id;
    this.isCityVisited = false;

    const query = new Query();
    query.equalTo('id', id);
    this.visitedCitiesCollection.find(query)
      .subscribe((visited) => {
        this.isCityVisited = visited.length === 1;
      }, (error) => {
        console.log(error);
      });

    const query2 = new Query();
    query2.equalTo('id', id);
    this.visitedCitiesCollection.find(query2)
      .subscribe((visitedCity) => {
        if (visitedCity.length === 1) {
          this.selectedCity = visitedCity[0]; //may be a problem because of this
          this.isCityVisited = true;
        }
      }, (error) => {
        console.log(error);
      });
  }

  async saveCountry() {
    this.selectedCountry.pictureUrl = this.form.get('pictureUrl').value;
    try {
      const savedEntity = await this.visitedCountriesCollection.save(this.selectedCountry);
      this.countrySend = true;
    } catch (error) {
      console.log(error);
    }
  }

  async saveCity() {
    this.selectedCity.description = this.form.get('description').value;
    try {
      const savedEntity = await this.visitedCitiesCollection.save(this.selectedCity);
      this.citySend = true;
      console.log(this.citySend);
    } catch (error) {
      console.log(error);
    }
  }

  ngOnDestroy() {
  }
  
}



