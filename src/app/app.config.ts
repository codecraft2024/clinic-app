import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';

 import {LoginNewComponent} from "./components/login/login-new.component";
import {HomeNewComponent} from "./components/home/home-new.component";
const routes: Routes = [
  { path: '', component: LoginNewComponent },
  { path: 'home', component: HomeNewComponent },
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
  ],
};
