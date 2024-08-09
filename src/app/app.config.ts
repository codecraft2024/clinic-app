import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import {provideRouter, Routes, withComponentInputBinding} from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';

 import {LoginNewComponent} from "./components/login/login-new.component";
import {HomeNewComponent} from "./components/home/home-new.component";
import { AuthGuard } from './guards/auth-guard.service'; // Import the guard

const routes: Routes = [
  { path: '', component: LoginNewComponent },
  { path: 'home', component: HomeNewComponent  ,canActivate: [AuthGuard]},
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes,withComponentInputBinding()),
    provideClientHydration(),
  ],
};
