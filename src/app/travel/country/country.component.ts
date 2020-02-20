import { Component, OnInit, Input } from '@angular/core';
import { ICountry } from 'src/app/share/interfaces/country';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {

  @Input('country') country: ICountry;
  constructor() { }

  ngOnInit() {
  }

}
