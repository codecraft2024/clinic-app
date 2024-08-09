import { Injectable } from '@angular/core';
import {StorageService} from "./StorageService";

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private authTokenKey = 'authToken';

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
}