import {Component} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import {NgIf, NgOptimizedImage} from "@angular/common";
import {UserLoginModel} from "./UserLoginModel";

@Component({
    selector: 'app-login-new',
    standalone: true,
    imports: [
        FormsModule,
        ReactiveFormsModule,
        NgOptimizedImage,
        NgIf
    ],
    templateUrl: './login-new.component.html',
    styleUrls: ['./login-new.component.scss']
})
export class LoginNewComponent {

    userLoginModel: UserLoginModel = new UserLoginModel();
    errorMessage: String = ""

    constructor(private router: Router) {
        console.log("im in login screen")
    }

    onLogin() {
        if(this.userLoginModel.isValid()){
            this.router.navigate(['/home']);
        }else{
            this.errorMessage = "username or password is invalid !"
        }

    }
}