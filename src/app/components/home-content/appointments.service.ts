import { Injectable } from '@angular/core';
import { Appointment } from "./Appointment";
import { format, isToday } from "date-fns";
import { enGB } from "date-fns/locale";

@Injectable({
    providedIn: 'root'
})
export class AppointmentService {

    itemsPerPage = 5;
    currentPage = 1;
    totalPages: number[] = [];
    today = new Date();
    appointments: Appointment[] = [];
    paginatedAppointments: Appointment[] = [];
    todayAppointments: Appointment[] = [];

    constructor() {
        this.init();
    }

    private static LOCAL_STORAGE_KEY = 'appointments';

    private loadAppointmentsFromLocalStorage(): Appointment[] {
        const storedAppointments = localStorage.getItem(AppointmentService.LOCAL_STORAGE_KEY);
        if (storedAppointments) {
            return JSON.parse(storedAppointments).map((appointment: any) => ({
                ...appointment,
                datetime: new Date(appointment.datetime)
            }));
        }
        return [];
    }

    private saveAppointmentsToLocalStorage(appointments: Appointment[]): void {
        localStorage.setItem(AppointmentService.LOCAL_STORAGE_KEY, JSON.stringify(appointments.map(app => ({
            ...app,
            datetime: app.datetime.toISOString() // Convert Date to ISO string for storage
        }))));
    }

    init() {
        this.appointments = this.loadAppointmentsFromLocalStorage();
        if (this.appointments.length === 0) {
            this.appointments = [
                {
                    id: 1,
                    name: 'Ahmed Al-Mansoori',
                    age: 25,
                    gender: 'Male',
                    phone: '050-1234567',
                    datetime: new Date(this.today.getTime() + 2 * 60 * 60 * 1000), // 2 hours from start of today
                    datetimeFormatted: this.formatDate(new Date(this.today.getTime() + 2 * 60 * 60 * 1000)),
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
                    datetime: new Date(this.today.getTime() + 3 * 60 * 60 * 1000), // 3 hours from start of today
                    datetimeFormatted: this.formatDate(new Date(this.today.getTime() + 3 * 60 * 60 * 1000)),
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
                    datetime: new Date(this.today.getTime() + 4 * 60 * 60 * 1000),
                    datetimeFormatted: this.formatDate(new Date(this.today.getTime() + 4 * 60 * 60 * 1000)),
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
                    datetime: new Date(this.today.getTime() + 5 * 60 * 60 * 1000),
                    datetimeFormatted: this.formatDate(new Date(this.today.getTime() + 5 * 60 * 60 * 1000)),
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
                    datetime: new Date(this.today.getTime() + 6 * 60 * 60 * 1000),
                    datetimeFormatted: this.formatDate(new Date(this.today.getTime() + 6 * 60 * 60 * 1000)),
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
                    datetime: new Date(this.today.getTime() + 7 * 60 * 60 * 1000),
                    datetimeFormatted: this.formatDate(new Date(this.today.getTime() + 7 * 60 * 60 * 1000)),
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
                    datetime: new Date(this.today.getTime() + 8 * 60 * 60 * 1000), // 8 hours from start of today
                    datetimeFormatted: this.formatDate(new Date(this.today.getTime() + 8 * 60 * 60 * 1000)),
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
                    datetime: new Date(this.today.getTime() + 9 * 60 * 60 * 1000), // 9 hours from start of today
                    datetimeFormatted: this.formatDate(new Date(this.today.getTime() + 9 * 60 * 60 * 1000)),
                    doctor: 'Dr. Sham',
                    payment: 'Cash',
                    doctorImage: '/assets/icon/menu/dr.png',
                    Status: 'Pending'
                }
            ];
            this.saveAppointmentsToLocalStorage(this.appointments);
        }
        this.calPaginatedAppointments();
        this.calculateTotalPages();
    }

    calPaginatedAppointments() {
        this.appointments.sort((a, b) => b.id - a.id);
        const startIndex = (this.currentPage - 1) * this.itemsPerPage;
        const endIndex = startIndex + this.itemsPerPage;
        this.paginatedAppointments = this.appointments.slice(startIndex, endIndex);

        const now = new Date();
        const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0);
        const endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59, 999);

        this.todayAppointments = this.appointments.filter(appointment => {
            const appointmentDate = new Date(appointment.datetime);
            return appointmentDate >= startOfDay && appointmentDate <= endOfDay;
        });
    }

    public AddAppointment(item: Appointment) {
        item.age = 35;
        item.datetimeFormatted = format(new Date(), "do MMM yyyy h:mm a", { locale: enGB });
        item.datetime = new Date();
        item.doctorImage = '/assets/icon/menu/dr.png';
        item.payment = 'Cash';
        item.id = (this.appointments.length) + 1;
        this.appointments.push(item);

        this.saveAppointmentsToLocalStorage(this.appointments);
        this.calPaginatedAppointments();
        this.calculateTotalPages();
    }

    goToPage(page: number) {
        this.currentPage = page;
        this.calPaginatedAppointments();
    }

    prevPage() {
        if (this.currentPage > 1) {
            this.currentPage--;
            this.calPaginatedAppointments();
        }
    }

    nextPage() {
        if (this.currentPage < this.totalPages.length) {
            this.currentPage++;
            this.calPaginatedAppointments();
        }
    }

    calculateTotalPages() {
        const pageCount = Math.ceil(this.appointments.length / this.itemsPerPage);
        this.totalPages = Array(pageCount).fill(0).map((x, i) => i + 1);
    }

    private formatDate(date: Date): string {
        const options: Intl.DateTimeFormatOptions = {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
        };
        return new Intl.DateTimeFormat('en-US', options).format(date).replace(',', '');
    }

    getDoctors() {
        return ["Dr. Tarun", "Dr. Richa", "Dr. Shyam", "Dr. Pratik", "Dr. Saumya", "Dr. Mirna", "Dr. Mariya", "Dr. Akshya"];
    }
}
