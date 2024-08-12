import { Injectable } from '@angular/core';
import {Appointment} from "./Appointment";

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  itemsPerPage = 3;
  currentPage = 1;
  totalPages: number[] = [];
  appointments: Appointment[] = [
    {
      id: 1,
      name: 'Ahmed Al-Mansoori',
      age: 25,
      gender: 'Male',
      phone: '050-1234567',
      datetime: '16th Sep 2023 11:00AM',
      doctor: 'Dr. Tarun',
      payment: 'Cash',
      doctorImage: '/assets/icon/menu/dr.png',
      Status: 'Pending'
    },
    {
      id: 2,
      name: 'Fatima Al-Habsi',
      age: 44,
      gender: 'Female',
      phone: '052-2345678',
      datetime: '18th Sep 2023 11:00AM',
      doctor: 'Dr. Tarun',
      payment: 'Cash',
      doctorImage: '/assets/icon/menu/dr.png',
      Status: 'Confirmed'
    },
    {
      id: 3,
      name: 'Mohamed Al-Sheikh',
      age: 30,
      gender: 'Male',
      phone: '055-3456789',
      datetime: '20th Sep 2023 12:00AM',
      doctor: 'Dr. Tarun',
      payment: 'Cash',
      doctorImage: '/assets/icon/menu/dr.png',
      Status: 'Confirmed'
    },
    {
      id: 4,
      name: 'Amira Ibrahim Sayed',
      age: 30,
      gender: 'Female',
      phone: '058-4567890',
      datetime: '19th Sep 2023 11:00AM',
      doctor: 'Dr. Tarun',
      payment: 'Cash',
      doctorImage: '/assets/icon/menu/dr.png',
      Status: 'Confirmed'
    },
    {
      id: 5,
      name: 'Aisha Al-Sheikh',
      age: 30,
      gender: 'Female',
      phone: '054-5678901',
      datetime: '24th Sep 2023 10:00AM',
      doctor: 'Dr. Tarun',
      payment: 'Cash',
      doctorImage: '/assets/icon/menu/dr.png',
      Status: 'Confirmed'
    },
    {
      id: 6,
      name: 'Mohamad El Rashed',
      age: 30,
      gender: 'Male',
      phone: '054-5678901',
      datetime: '28th Sep 2023 8:00AM',
      doctor: 'Dr. Sham',
      payment: 'Cash',
      doctorImage: '/assets/icon/menu/dr.png',
      Status: 'Confirmed'
    },
    {
      id: 7,
      name: 'Abd Allah All Maktom',
      age: 13,
      gender: 'Male',
      phone: '054-5678555',
      datetime: '29th Sep 2023 11:33AM',
      doctor: 'Dr. Sham',
      payment: 'Cash',
      doctorImage: '/assets/icon/menu/dr.png',
      Status: 'Pending'
    },
    {
      id: 8,
      name: 'Mohamad El Rashed',
      age: 30,
      gender: 'Male',
      phone: '054-5678901',
      datetime: '28th Sep 2023 8:00AM',
      doctor: 'Dr. Sham',
      payment: 'Cash',
      doctorImage: '/assets/icon/menu/dr.png',
      Status: 'Pending'
    }
  ];
  paginatedAppointments: Appointment[] = [];

  constructor() { }

  getAppointments(): Appointment[] {
    return this.appointments;
  }
  calculateTotalPages() {
    const pageCount = Math.ceil(this.appointments.length / this.itemsPerPage);
    this.totalPages = Array(pageCount).fill(0).map((x, i) => i + 1);
  }

  public AddAppointment(item:Appointment){
    this.appointments.push(item)
    this.calculateTotalPages();
    this.updatePaginatedAppointments()
  }

  updatePaginatedAppointments() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedAppointments = this.appointments.slice(startIndex, endIndex);
  }

  goToPage(page: number) {
    this.currentPage = page;
    this.updatePaginatedAppointments();
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePaginatedAppointments();
    }
  }
  nextPage() {
    if (this.currentPage < this.totalPages.length) {
      this.currentPage++;
      this.updatePaginatedAppointments();
    }
  }

  getDoctors() {
    return ["Dr. Tarun","Dr. Richa","Dr. Shyam","Dr. Pratik","Dr. Saumya","Dr. Mirna","Dr. Mariya","Dr. Akshya"];
  }
}