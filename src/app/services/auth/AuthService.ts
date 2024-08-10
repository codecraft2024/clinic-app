import { Injectable } from '@angular/core';
import {StorageService} from "./StorageService";
import {LoggedInUserModel} from "../../components/login/LoggedInUserModel";

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private authTokenKey = 'authToken';
    private loggedInUser:LoggedInUserModel = new LoggedInUserModel();
    constructor(private storageService: StorageService) {}

    isLoggedIn(): boolean {
        return !!this.storageService.getItem(this.authTokenKey);
    }

    setAuthToken(token: string): void {
        this.storageService.setItem(this.authTokenKey, token);
    }

    clearAuthToken(): void {
        this.storageService.removeItem(this.authTokenKey);
    }

    setLoggedInUser(loggedInUser: LoggedInUserModel) {
        this.loggedInUser = loggedInUser;
    }
    getLoggedInUser(){
        return this.loggedInUser;
    }

}