import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login-new',
    standalone: true,
    imports: [
        FormsModule,
        ReactiveFormsModule
    ],
    templateUrl: './login-new.component.html',
    styleUrls: ['./login-new.component.scss']
})
export class LoginNewComponent {
    constructor(private router: Router) {
        console.log("im in login screen")
    }

    onLogin() {
        // Perform login logic
        // After successful login, navigate to the home page
        this.router.navigate(['/home']);
    }
}