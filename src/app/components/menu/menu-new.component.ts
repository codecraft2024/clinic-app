import {Component} from '@angular/core';
import {AuthService} from "../../services/auth/AuthService";
import { format } from 'date-fns';
import { enGB } from 'date-fns/locale';
@Component({
    selector: 'app-menu-new',
    standalone: true,
    imports: [],
    templateUrl: './menu-new.component.html',
    styleUrls: ['./menu-new.component.scss']


})
export class MenuNewComponent {
    formattedDate: string;

    constructor(protected authServie: AuthService) {
        const now = new Date(); // Replace this with your LocalDateTime if needed
        this.formattedDate = format(now, "EEEE d MMMM, yyyy 'at' h:mm a", {locale: enGB});
    }

}
