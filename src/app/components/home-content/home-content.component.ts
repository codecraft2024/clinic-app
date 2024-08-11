import { Component,HostListener } from '@angular/core';
import {format} from "date-fns";
import {enGB} from "date-fns/locale";
import {AuthService} from "../../services/auth/AuthService";
import { CommonModule } from '@angular/common';
import {Appointment, DropdownOption} from "./Appointment";

@Component({
  selector: 'app-home-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-content.component.html',
  styleUrl: './home-content.component.scss'
})
export class HomeContentComponent {


  isDropdownOpen = false;
   formattedDate: string;

   selectedOption = 'Select an option';


  appointments: Appointment[] = [
    { id: 1, name: 'Ahmed Al-Mansoori', age: 25, gender: 'Male', phone: '050-1234567', datetime: '16th Sep 2023 11:00AM', doctor: 'Dr. Tarun', payment: 'Cash', doctorImage: '/assets/icon/menu/dr.png' , Status:'Confirmed' },
    { id: 2, name: 'Fatima Al-Habsi', age: 44, gender: 'Female', phone: '052-2345678', datetime: '18th Sep 2023 11:00AM', doctor: 'Dr. Tarun', payment: 'Cash', doctorImage: '/assets/icon/menu/dr.png', Status:'Confirmed' },
    { id: 3, name: 'Mohamed Al-Sheikh', age: 30, gender: 'Male', phone: '055-3456789', datetime: '20th Sep 2023 12:00AM', doctor: 'Dr. Tarun', payment: 'Cash', doctorImage: '/assets/icon/menu/dr.png', Status:'Confirmed' },
    { id: 4, name: 'Amira Ibrahim Sayed', age: 30, gender: 'Female', phone: '058-4567890', datetime: '19th Sep 2023 11:00AM', doctor: 'Dr. Tarun', payment: 'Cash', doctorImage: '/assets/icon/menu/dr.png' , Status:'Confirmed'},
    { id: 5, name: 'Aisha Al-Sheikh', age: 30, gender: 'Female', phone: '054-5678901', datetime: '24th Sep 2023 10:00AM', doctor: 'Dr. Tarun',payment: 'Cash', doctorImage: '/assets/icon/menu/dr.png' , Status:'Confirmed'},
    { id: 6, name: 'Mohamad El Rashed', age: 30, gender: 'Male', phone: '054-5678901', datetime: '28th Sep 2023 8:00AM', doctor: 'Dr. Sham', payment: 'Cash', doctorImage: '/assets/icon/menu/dr.png', Status:'Confirmed' }
  ];

  // Static list of dropdown options with type
  dropdownOptions: DropdownOption[] = [
    { label: 'Option 1' },
    { label: 'Option 2' },
    { label: 'Option 3' }
  ];



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
