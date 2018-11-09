import { Component, OnInit } from '@angular/core';
import { Flight } from '../../entities/flight';
import { HttpParams, HttpHeaders, HttpClient } from '@angular/common/http';
import { FlightService, DefaultFlightService, DummyFlightService } from './flight.service';

@Component({
  selector: 'flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css'],
  providers: [
    { provide: FlightService, useClass: DefaultFlightService }
  ]
})
export class FlightSearchComponent implements OnInit {

  from: string;
  to: string;
  basket: object = {
    "3": true,
    "5": true
  }

  flights: Array<Flight> = [];
  selectedFlight: Flight;

  constructor(private flightService: FlightService) { }

  // private http: HttpClient;
  // constructor(http: HttpClient) {
  //   this.http = http;
  // }

  ngOnInit() {
  }

  search(): void {

    this.flightService.find(this.from, this.to).subscribe(
      flights => { this.flights = flights; },
      err => {console.debug('error loading', err); }
    )

    // this.flights = [
    //   { id: 17, from: 'München', to: 'Flagranti', date: '2018-11-09T17:00+01:00'},
    //   { id: 18, from: 'München', to: 'Kognito', date: '2018-11-09T17:30+01:00'},
    //   { id: 19, from: 'München', to: 'Mallorca', date: '2018-11-09T18:00+01:00'}
    // ];
  }

  select(f: Flight): void {
    this.selectedFlight = f;
  }

}
