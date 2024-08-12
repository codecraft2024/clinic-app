import {Component, HostListener} from '@angular/core';
import {format} from "date-fns";
import {enGB} from "date-fns/locale";
import {AuthService} from "../../services/auth/AuthService";
import {CommonModule} from '@angular/common';
import {Appointment, DropdownOption} from "./Appointment";
import {AddAppointmentComponent} from "../add-appointment/add-appointment.component";
import {MatDialog} from "@angular/material/dialog";
import {MatTooltipModule} from '@angular/material/tooltip';
import {AppointmentService} from "./appointments.service";

@Component({
    selector: 'app-home-content',
    standalone: true,
    imports: [CommonModule, MatTooltipModule],
    templateUrl: './home-content.component.html',
    styleUrl: './home-content.component.scss'
})
export class HomeContentComponent {

    formattedDate: string;


    constructor(protected authService: AuthService, public appointmentsService: AppointmentService, private dialog: MatDialog) {
        this.formattedDate = format(new Date(), "EEEE d MMMM, yyyy 'at' h:mm a", {locale: enGB});
        this.appointmentsService.calculateTotalPages();
        this.appointmentsService.updatePaginatedAppointments();
    }


    openModal() {
        this.dialog.open(AddAppointmentComponent, {
            width: '400px',
        });
    }


}
