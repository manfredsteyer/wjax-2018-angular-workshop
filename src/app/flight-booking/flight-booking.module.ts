import { PassengerSearchComponent } from './passenger-search/passenger-search.component';
import { RouterModule } from '@angular/router';
import { FlightCardComponent } from './flight-card/flight-card.component';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { FlightService, DefaultFlightService } from './flight-search/flight.service';
import { FLIGHT_BOOKING_ROUTES } from './flight-booking.routes';
import { FlightEditComponent } from './flight-edit/flight-edit.component';

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(FLIGHT_BOOKING_ROUTES)
    ],
    declarations: [
        FlightEditComponent,
        PassengerSearchComponent,
        FlightSearchComponent,
        FlightCardComponent
    ],
    // providers: [{provide: FlightService, useClass: DefaultFlightService}],
    exports: [
    ]
})
export class FlightBookingModule {
}

