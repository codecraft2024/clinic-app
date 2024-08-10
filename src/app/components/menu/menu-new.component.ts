import { Component } from '@angular/core';
import {AuthService} from "../../services/auth/AuthService";

@Component({
  selector: 'app-menu-new',
  standalone: true,
  imports: [],
  templateUrl: './menu-new.component.html',
  styleUrls: ['./menu-new.component.scss']


})
export class MenuNewComponent {

 constructor(protected  authServie:AuthService) {
 }



  isSidebarClosed: boolean = false;

  toggleSidebar() {
    this.isSidebarClosed = !this.isSidebarClosed;
  }
}
