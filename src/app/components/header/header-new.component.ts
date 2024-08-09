import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

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

}
