import { Component } from '@angular/core';
import {format} from "date-fns";
import {enGB} from "date-fns/locale";
import {AuthService} from "../../services/auth/AuthService";

@Component({
  selector: 'app-home-content',
  standalone: true,
  imports: [],
  templateUrl: './home-content.component.html',
  styleUrl: './home-content.component.scss'
})
export class HomeContentComponent {
  formattedDate: string;

  constructor(protected authService: AuthService) {

    this.formattedDate = format(new Date(), "EEEE d MMMM, yyyy 'at' h:mm a", {locale: enGB});

  }


}
