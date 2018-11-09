import { Pipe, PipeTransform } from '@angular/core';
import { FlightSearchComponent } from '../flight-booking/flight-search/flight-search.component';
import { FlightService } from '../flight-booking/flight-search/flight.service';

@Pipe({
  name: 'city',
  pure: true
})
export class CityPipe implements PipeTransform {

  constructor(private flightService: FlightService) {

  }

  transform(value: string, format: string): string {
  
    let short, long;

    switch(value) {
      case 'München':
        short = 'MUC';
        long = 'Airport Munich';
        break;
      case 'Graz':
        short = 'GRZ';
        long = 'Flughafen Graz-Thalerhof';
        break;
      case 'Hamburg':
        short = 'HAM';
        long = 'Airport Hamburg Fuhlsbüttel -- Helmut Schmidt';
        break;
      default:
        short = long = value;
    }

    if (format === 'short') return short;
    return long;

  }

}
