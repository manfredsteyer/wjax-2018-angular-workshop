import { AboutComponent } from './about/about.component';
import { HomeComponent } from './../home/home.component';
import { Routes } from "@angular/router";
import { ErrorComponent } from './error/error.component';

export const APP_ROUTES: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'flight-booking', loadChildren: './flight-booking/flight-booking.module#FlightBookingModule'},
    { path: '**', component: ErrorComponent}
];