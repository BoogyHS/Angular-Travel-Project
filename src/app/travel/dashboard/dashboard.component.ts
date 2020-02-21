import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataStoreService, Query } from 'kinvey-angular-sdk';
import { ICountry } from 'src/app/share/interfaces/country';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  visitedCountries: any;
  countries: ICountry[];
  searchedCountry: ICountry[];
  form: FormGroup;
  counrtiesCollection: any;
  searchBtnClicked: boolean;

  constructor(
    public datastoreService: DataStoreService,
    private activatedRoute: ActivatedRoute,
    public fb: FormBuilder,
  ) {
    this.visitedCountries = datastoreService.collection('visitedCountries');
    this.counrtiesCollection = datastoreService.collection('countriesArr');
    this.countries = activatedRoute.snapshot.data.list;
    this.form = this.fb.group({
      search: ['', [Validators.required]],
    });
  }

  ngOnInit() {
  }

  search() {
    this.searchBtnClicked=true;
    const query = new Query();
    query.ascending('country');
    query.equalTo('country', this.form.get('search').value);
    this.visitedCountries.find(query)
      .subscribe((country) => {
        this.searchedCountry = country[0];
        console.log(this.searchedCountry);
      }, (error) => {
        console.log(error);
      });
  }

  ngOnDestroy() {
    this.datastoreService.clearCache();
  }
}
