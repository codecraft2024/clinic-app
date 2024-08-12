import { Component } from '@angular/core';
import {MatDialogActions, MatDialogContent} from "@angular/material/dialog";
import {MatFormField} from "@angular/material/form-field";
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatOption, MatSelect} from "@angular/material/select";
import {MatDatepicker, MatDatepickerToggle} from "@angular/material/datepicker";

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
        MatDatepicker
    ],
  templateUrl: './add-appointment.component.html',
  styleUrl: './add-appointment.component.scss'
})
export class AddAppointmentComponent {

}
