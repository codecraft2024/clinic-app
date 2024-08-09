import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

    constructor(private router: Router) {}

    onLogin() {
      // Perform login logic
      // After successful login, navigate to the home page
      this.router.navigate(['/home']);}
}