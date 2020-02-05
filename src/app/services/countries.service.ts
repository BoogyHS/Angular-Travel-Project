import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICountry } from '../models/country';

// https://baas.kinvey.com/appdata/app_id/treks?query={"_acl.creator":"${user_id}"}
// "6769aed6-0c96-4b50-b3da-b26fc719fa85.CD7cBkFoSe2reWEP4CbTkBzpUcH3S3PhekpwOV8yX5k="
const appKey = 'kid_H1S5b0p-I';
const appSecret = '1ce36659a9c2470784ed80c9b31e8b6c';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  baseUrl: string = 'https://baas.kinvey.com/appdata/';
  countries: string = '/countries';

  constructor(private http: HttpClient) { }


  getCountries(): Observable<ICountry> {
    const headers = {
      method: 'GET',
      headers: {
        'Authorization': 'Kinvey 6769aed6-0c96-4b50-b3da-b26fc719fa85.CD7cBkFoSe2reWEP4CbTkBzpUcH3S3PhekpwOV8yX5k=',
        'Content-Type': 'application/json'
      }
    };
    return this.http.get<ICountry>(this.baseUrl + appKey + this.countries, headers);
  }
}
