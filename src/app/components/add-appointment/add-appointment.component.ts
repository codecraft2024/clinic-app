import {Component, OnInit} from '@angular/core';
import {MatDialogActions, MatDialogContent, MatDialogRef} from "@angular/material/dialog";
import {MatFormField} from "@angular/material/form-field";
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatOption, MatSelect} from "@angular/material/select";
import {MatDatepicker, MatDatepickerToggle} from "@angular/material/datepicker";
import {Appointment} from "../home-content/Appointment";
import {AppointmentService} from "../home-content/appointments.service";
import {FormsModule, NgForm} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";
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
        NgForOf,
        NgIf
    ],
  templateUrl: './add-appointment.component.html',
  styleUrl: './add-appointment.component.scss'
})
export class AddAppointmentComponent implements  OnInit{
    newAppointment:Appointment = new Appointment();
    doctors: string[] = [];
    ngOnInit(): void {
        this.doctors = this.appointmentService.getDoctors();
    }

    constructor(private appointmentService:AppointmentService , public dialogRef: MatDialogRef<AddAppointmentComponent>) {

    }



    saveAppointment(form: NgForm): void {
        if (form.valid) {
            this.appointmentService.AddAppointment(this.newAppointment);
            this.dialogRef.close();
        } else {
            // Handle form errors here (optional)
            console.log('Form is invalid');
        }
    }


}
