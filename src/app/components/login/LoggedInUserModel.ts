export class LoggedInUserModel {
    username: string = '';
    password: string = '';

    fullName:String = "Geroge Sorial";



    isValid(): boolean {
        return this.username === 'admin' && this.password === 'admin';
    }
}