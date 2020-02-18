import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataStoreService, Query } from 'kinvey-angular-sdk';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-add-travel',
  templateUrl: './add-travel.component.html',
  styleUrls: ['./add-travel.component.scss']
})
export class AddTravelComponent implements OnInit {

  @ViewChild('selectedCountry', { static: false }) selectedCountry: ElementRef;

  form: FormGroup;
  allCountries: any;
  countries: any;

  constructor(
    private fb: FormBuilder,
    datastoreService: DataStoreService
  ) {
    this.form = this.fb.group({
      countrySelect: ['', [Validators.required]],
      text: ['', [Validators.required]],
    });

    this.allCountries = datastoreService.collection('countriesArr');
  }

  ngOnInit() {
    const query = new Query();
    query.ascending('country');
    query.fields = ['country'];
    this.allCountries.find(query)
      .subscribe((countries) => {
        this.countries = countries;
        console.log(countries);

      }, (error) => {
        console.log(error);
      });
  }


}
