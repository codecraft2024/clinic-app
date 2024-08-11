import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { BehaviorSubject, fromEvent } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ResponsiveService {
  private isMobileSubject = new BehaviorSubject<boolean>(false);
  isMobile$ = this.isMobileSubject.asObservable();

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      this.checkScreenSize();
      fromEvent(window, 'resize').subscribe(() => this.checkScreenSize());
    }
  }

  private checkScreenSize(): void {
    const isMobile = window.innerWidth <= 768;
    this.isMobileSubject.next(isMobile);
  }
}
