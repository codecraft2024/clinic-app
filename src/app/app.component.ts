import { Component, OnInit, OnDestroy, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderNewComponent } from "./components/header/header-new.component";
import { FooterNewComponent } from "./components/footer/footer-new.component";
import { MenuNewComponent } from './components/menu/menu-new.component';
import { LoginNewComponent } from './components/login/login-new.component';
import { ResponsiveService } from './responsive.service';
import { Subscription } from 'rxjs';
import { AuthService } from './services/auth/AuthService';
import { CommonModule } from '@angular/common';
import { HomeContentComponent } from './components/home-content/home-content.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderNewComponent, FooterNewComponent, MenuNewComponent, LoginNewComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy, AfterViewInit {

  isMobile: boolean = false;
  private subscription: Subscription = new Subscription();

  constructor(
      private responsiveService: ResponsiveService,
      private el: ElementRef,
      private renderer: Renderer2,
      private authService: AuthService // Assuming authService is defined
  ) {}

  ngOnInit(): void {
    this.subscription = this.responsiveService.isMobile$.subscribe(isMobile => {
      this.isMobile = isMobile;
      this.authService.isSidebarClosed = isMobile; // Automatically set closed state on mobile
    });
  }

  ngAfterViewInit(): void {
    // Now, handle the sidebar state after the view is initialized
    this.handleScreenSizeChange();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private handleScreenSizeChange(): void {
    const sidebar = this.el.nativeElement.querySelector('.sidebar');

    if (sidebar) {
      if (this.isMobile) {
        this.renderer.addClass(sidebar, 'closed');
      } else {
        this.renderer.removeClass(sidebar, 'closed');
      }
    } else {
      console.warn('Sidebar element not found');
    }
  }
}
