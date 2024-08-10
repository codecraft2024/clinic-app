import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AuthService} from "../../services/auth/AuthService";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header-new',
  standalone: true,
    imports: [
        FormsModule,
        ReactiveFormsModule
    ],
  templateUrl: './header-new.component.html',
  styleUrl: './header-new.component.scss'
})
export class HeaderNewComponent {

    constructor(protected authServie:AuthService, private router: Router) {

    }

    onLogout() {
        console.log("on cancel")
        this.authServie.clearAuthToken()
        this.router.navigate(['']);

    }

    toggleSidebar() {
        console.log("im in toggle side bar")
        console.log("isSidebarClosed: "+this.authServie.isSidebarClosed)
        this.authServie.isSidebarClosed = !this.authServie.isSidebarClosed;
    }


}
