export class UserLoginModel {
    username: string = '';
    password: string = '';

    isValid(): boolean {
        return this.username === 'test' && this.password === 'test';
    }
}