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

    constructor(protected authService:AuthService, private router: Router) {

    }

    onLogout() {
        console.log("on cancel")
        this.authService.clearAuthToken()
        this.router.navigate(['']);

    }


}
