import { Component,HostListener } from '@angular/core';
import {format} from "date-fns";
import {enGB} from "date-fns/locale";
import {AuthService} from "../../services/auth/AuthService";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-content.component.html',
  styleUrl: './home-content.component.scss'
})
export class HomeContentComponent {


  isDropdownOpen = false;
  selectedOption: string = '';
  formattedDate: string;

  constructor(protected authService: AuthService) {

    this.formattedDate = format(new Date(), "EEEE d MMMM, yyyy 'at' h:mm a", {locale: enGB});

  }

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  // Select an option and close the dropdown
  selectOption(option: string): void {
    this.selectedOption = option;
    this.isDropdownOpen = false;
  }

  // Close the dropdown if clicked outside
  @HostListener('document:click', ['$event'])
  onClick(event: Event): void {
    const target = event.target as HTMLElement;
    if (!target.closest('.dropdown')) {
      this.isDropdownOpen = false;
    }
  }


}
