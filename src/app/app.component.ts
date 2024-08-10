import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderNewComponent } from "./components/header/header-new.component";
import { FooterNewComponent } from "./components/footer/footer-new.component";
import { MenuNewComponent } from './components/menu/menu-new.component';
import { LoginNewComponent } from './components/login/login-new.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderNewComponent, FooterNewComponent,MenuNewComponent,LoginNewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
