import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import {AuthService} from "../services/auth/AuthService";

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate{

    constructor(private authService: AuthService, private router: Router) {}


    canActivate(): boolean {
        console.log("canActivate"+this.authService.isLoggedIn());

        if (this.authService.isLoggedIn()) {
            return true;
        } else {
            this.router.navigate(['']);
            return false;
        }
    }
}