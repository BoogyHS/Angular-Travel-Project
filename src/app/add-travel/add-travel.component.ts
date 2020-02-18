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
  allCountries: any;
  allCities: any;
  countries: any;
  cities: any;
  selectedCountry: string;
  selectedCity: any;

  constructor(
    private fb: FormBuilder,
    datastoreService: DataStoreService
  ) {
    this.form = this.fb.group({
      countrySelect: ['', [Validators.required]],
      citySelect: ['', [Validators.required]],
      text: ['', [Validators.required]],
    });

    this.allCountries = datastoreService.collection('countriesArr');
    this.allCities = datastoreService.collection('citiesArr');
  }

  ngOnInit() {

    const query = new Query();
    query.ascending('country');
    query.fields = ['country'];
    this.allCountries.find(query)
      .subscribe((countries) => {
        this.countries = countries;
        // console.log(countries);

      }, (error) => {
        console.log(error);
      });
  }

  changeSelectedCountry() {
    this.selectedCountry = this.form.get('countrySelect').value;

    const query = new Query();
    query.ascending('citi_ascii');
    query.equalTo('country', this.selectedCountry);
    this.allCities.find(query)
    .subscribe((cities) => {
      this.cities = cities;
      console.log(cities);

    }, (error) => {
      console.log(error);
    });
  }

  changeSelectedCity($event){
    this.selectedCity = this.form.get('citySelect').value;
    console.log(this.selectedCity);

  }

  ngOnDestroy() {
  }
}
