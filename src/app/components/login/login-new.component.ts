import {Component} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import {NgIf, NgOptimizedImage} from "@angular/common";
import {LoggedInUserModel} from "./LoggedInUserModel";
import {AuthService} from "../../services/auth/AuthService";

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

    userLoginModel: LoggedInUserModel = new LoggedInUserModel();
    errorMessage: String = ""

    constructor(private authService:AuthService, private router: Router) {
        authService.clearAuthToken();
     }

    onLogin() {
        console.log("in submit login")
        if(this.userLoginModel.isValid()){
            this.authService.setAuthToken("token from backend ");
            this.authService.setLoggedInUser(this.userLoginModel);
            this.router.navigate(['/home']);
            console.log("i will go to the home now")
        }else{
            this.errorMessage = "username or password is invalid !"
        }

    }
}