import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { DataStoreService } from 'kinvey-angular-sdk';

@Injectable({
  providedIn: 'root'
})
export class DashboardResolverService implements Resolve<any> {
  visitedCountries: any;

  constructor(private datastoreService: DataStoreService) {
    this.visitedCountries = datastoreService.collection('visitedCountries');
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
     return this.visitedCountries.find();
    // return true;
  }

}
