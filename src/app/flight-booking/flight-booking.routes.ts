import { PassengerSearchComponent } from './passenger-search/passenger-search.component';
import { Routes } from '@angular/router';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { FlightEditComponent } from './flight-edit/flight-edit.component';

export const FLIGHT_BOOKING_ROUTES: Routes = [
    //{ path: 'flight-booking', children: [
        { path: 'flight-search', component: FlightSearchComponent},
        { path: 'passenger-search', component: PassengerSearchComponent},
        { path: 'flight-edit/:id', component: FlightEditComponent}
    //]}
];