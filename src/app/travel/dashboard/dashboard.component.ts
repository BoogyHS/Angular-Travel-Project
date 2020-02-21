import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataStoreService } from 'kinvey-angular-sdk';
import { ICountry } from 'src/app/share/interfaces/country';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  visitedCountries: any;
  countries: ICountry[];

  constructor(
    public datastoreService: DataStoreService,
    private activatedRoute: ActivatedRoute
    ) {
    this.visitedCountries = datastoreService.collection('visitedCountries');
    this.countries = activatedRoute.snapshot.data.list;
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.datastoreService.clearCache();
  }
}
