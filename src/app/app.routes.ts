import { RouterModule, Routes } from '@angular/router';
import { LoginNewComponent } from './components/login/login-new.component';
import { HomeNewComponent } from './components/home/home-new.component';

const routes: Routes = [
    { path: '', component: LoginNewComponent }, // Root path should show LoginNewComponent
    { path: 'home', component: HomeNewComponent },
    { path: '**', redirectTo: '' } // Catch-all route should redirect to the root path
];

export const AppRoutingModule = RouterModule.forRoot(routes);
