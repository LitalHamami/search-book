import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivate} from '@angular/router';
import {Observable} from 'rxjs';
import {CONSTANTS} from '../../constant';


@Injectable({
  providedIn: 'root'
})

export class IsLoginGuard implements CanActivate {

  constructor( private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (!JSON.parse(sessionStorage.getItem('userName'))) {
      this.router.navigate([CONSTANTS.ROUTES.WELCOME_PAGE]);
      return false;
    }
    return true;
  }
}
