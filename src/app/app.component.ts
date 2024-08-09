import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderNewComponent } from "./components/header-new/header-new.component";
import { FooterNewComponent } from "./components/footer-new/footer-new.component";
import { MenuNewComponent } from './components/menu-new/menu-new.component';
import { LoginNewComponent } from './components/login-new/login-new.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderNewComponent, FooterNewComponent,MenuNewComponent,LoginNewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
