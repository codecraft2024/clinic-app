import { Component } from '@angular/core';
import {HeaderNewComponent} from "../header/header-new.component";
import {MenuNewComponent} from "../menu/menu-new.component";
import {FooterNewComponent} from "../footer/footer-new.component";

@Component({
  selector: 'app-home-new',
  standalone: true,
  imports: [
    HeaderNewComponent,
    MenuNewComponent,
    FooterNewComponent
  ],
  templateUrl: './home-new.component.html',
  styleUrl: './home-new.component.scss'
})
export class HomeNewComponent {
  constructor() {
    console.log("im in home now")
  }

}
