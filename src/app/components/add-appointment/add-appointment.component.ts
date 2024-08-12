import {Component, OnInit} from '@angular/core';
import {MatDialogActions, MatDialogContent} from "@angular/material/dialog";
import {MatFormField} from "@angular/material/form-field";
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatOption, MatSelect} from "@angular/material/select";
import {MatDatepicker, MatDatepickerToggle} from "@angular/material/datepicker";
import {Appointment} from "../home-content/Appointment";
import {AppointmentService} from "../home-content/appointments.service";
import {FormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";
import {enGB} from "date-fns/locale";
import {format} from "date-fns";

@Component({
  selector: 'app-modal-content',
  standalone: true,
    imports: [
        MatDialogActions,
        MatDialogContent,
        MatFormField,
        MatInputModule,
        MatFormFieldModule,
        MatSelect,
        MatOption,
        MatDatepickerToggle,
        MatDatepicker,
        FormsModule,
        NgForOf
    ],
  templateUrl: './add-appointment.component.html',
  styleUrl: './add-appointment.component.scss'
})
export class AddAppointmentComponent implements  OnInit{
    newAppointment:Appointment = new Appointment();
    doctors: string[] = [];
    ngOnInit(): void {
        this.doctors = this.appointmentService.getDoctors();
        console.log(this.doctors)

    }
    constructor(private appointmentService:AppointmentService) {

    }

    saveAppointment() {

        this.appointmentService.AddAppointment(this.newAppointment);
    }


}
