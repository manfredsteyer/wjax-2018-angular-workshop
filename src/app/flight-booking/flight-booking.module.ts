import { FlightCardComponent } from './flight-card/flight-card.component';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { FlightService, DefaultFlightService } from './flight-search/flight.service';

@NgModule({
    imports: [
        SharedModule
    ],
    declarations: [
        FlightSearchComponent,
        FlightCardComponent
    ],
    // providers: [{provide: FlightService, useClass: DefaultFlightService}],
    exports: [
        FlightSearchComponent
    ]
})
export class FlightBookingModule {
}

