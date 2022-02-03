import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';


@Injectable({
    providedIn: 'root'
})
export class AuthGuardService implements CanActivate, CanActivateChild {
    constructor(
        private authService: AuthService,
        private router: Router
    ) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const url: string = state.url; // console.log('redirectUrl: ' + url);
        if (this.authService.user) {
            return true;
        }
        this.authService.redirectUrl = url;
        this.router.navigate(['/login']); // , { skipLocationChange: true }); // Broke autoLogin
        return false;
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        /* const loggedInUser = this.authService.user;
        if (loggedInUser.role === 'ADMIN') {
            return true;
        } else { */
            console.log('Unauthorized to open link: ' + state.url);
            return false;
        // }
    }
}
