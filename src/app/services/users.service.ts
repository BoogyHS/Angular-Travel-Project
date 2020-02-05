import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const appKey = 'kid_H1S5b0p-I';
const appSecret = '1ce36659a9c2470784ed80c9b31e8b6c';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  baseUrl: string = 'https://baas.kinvey.com/user/';
  login: string = '/login';

  constructor(private http: HttpClient) { }

  getLogin() {
    const body = {
      "username": "boogy",
      "password": "123"
    }

    const headers = {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${btoa(`${appKey}:${appSecret}`)}`,
        'Content-Type': 'application/json'
      }
    };
    
    return this.http.post(this.baseUrl + appKey + this.login, body, headers);
  }
}
