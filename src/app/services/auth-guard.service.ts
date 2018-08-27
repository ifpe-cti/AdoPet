import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';


@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private route: Router, private authService: AuthService) { 
      
    }
    
    canActivate() {
        if (this.authService.isLoggedIn()) {
            return true;
        }
        this.route.navigate(['/']);
        return false;
    }
}