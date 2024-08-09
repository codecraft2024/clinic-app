import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class StorageService {
    isLocalStorageAvailable(): boolean {
        return typeof window !== 'undefined' && !!window.localStorage;
    }

    setItem(key: string, value: string): void {
        if (this.isLocalStorageAvailable()) {
            localStorage.setItem(key, value);
        }
    }

    getItem(key: string): string | null {
        if (this.isLocalStorageAvailable()) {
            return localStorage.getItem(key);
        }
        return null;
    }

    removeItem(key: string): void {
        if (this.isLocalStorageAvailable()) {
            localStorage.removeItem(key);
        }
    }
}