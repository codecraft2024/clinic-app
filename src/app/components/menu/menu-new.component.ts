import {Component} from '@angular/core';
import {AuthService} from "../../services/auth/AuthService";
import { enGB } from 'date-fns/locale';
import {HomeContentComponent} from "../home-content/home-content.component";
@Component({
    selector: 'app-menu-new',
    standalone: true,
    imports: [
        HomeContentComponent
    ],
    templateUrl: './menu-new.component.html',
    styleUrls: ['./menu-new.component.scss']


})
export class MenuNewComponent {


    constructor(protected authServie: AuthService) {


    }

}
