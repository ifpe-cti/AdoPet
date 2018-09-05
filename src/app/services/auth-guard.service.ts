import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';


@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private route: Router, private authService: AuthService) {

    }

    canActivate() {
        console.log("peegou");
        console.log(this.authService.isLoggedIn())
        return true;
        /*console.log(this.authService.isLoggedIn())
        if (this.authService.isLoggedIn()) {
            return true;
            
        }
        this.route.navigate(['/']);
        return false;*/
    }

    
}