export class Appointment {
    id: number=0;
    name: string="";
    age: number=0;
    gender: string="Male";
    phone: string="";
    datetime:Date = new Date()
    datetimeFormatted: string="";
    doctor: string="";
    payment: string="";
    doctorImage: string="";
    Status:string="";
}


export interface DropdownOption {
    label: string;
}
