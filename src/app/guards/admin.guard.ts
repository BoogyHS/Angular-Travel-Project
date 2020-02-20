import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from 'kinvey-angular-sdk';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.userService.getActiveUser()) {

      const admin = this.userService.getActiveUser()._acl['entity']['username'];

      if (admin === 'bozhidar.atanasov@abv.bg') {
        
        return true;
      }
    }

    this.router.navigate(['/dashboard']);
    return false;
  }

}
