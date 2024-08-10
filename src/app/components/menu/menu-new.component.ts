import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-new',
  standalone: true,
  imports: [],
  templateUrl: './menu-new.component.html',
  styleUrls: ['./menu-new.component.scss']


})
export class MenuNewComponent {



  isSidebarClosed: boolean = false;

  toggleSidebar() {
    this.isSidebarClosed = !this.isSidebarClosed;
  }
}
