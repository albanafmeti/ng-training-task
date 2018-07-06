import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../services';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    public router: Router,
    private authService: AuthService) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    if (!this.authService.check()) {
      this.router.navigate(['/login']);
      return false;
    }

    return true;
  }
}
