import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Flight } from '../../entities/flight';

@Injectable()
export class DefaultFlightService implements FlightService {
  
  constructor(private http: HttpClient) { }

  find(from: string, to: string): Observable<Flight[]>
  {
    const url = 'http://www.angular.at/api/flight';
    const params = new HttpParams().set('from', from).set('to', to);
    const headers = new HttpHeaders().set('Accept', 'application/json');

    return this.http.get<Flight[]>(url, {params, headers});
  }

}

@Injectable()
export class DummyFlightService implements FlightService {

  find(from: string, to: string): Observable<Flight[]> {
    return of([
      { id: 17, from: 'München', to: 'Flagranti', date: '2018-11-09T17:00+01:00'},
      { id: 18, from: 'München', to: 'Kognito', date: '2018-11-09T17:30+01:00'},
      { id: 19, from: 'München', to: 'Mallorca', date: '2018-11-09T18:00+01:00'}
    ]);
  }

}


const DEBUG = true;

@Injectable({
  providedIn: 'root',
  // useClass: DummyFlightService,
  useFactory: (http: HttpClient) => {
    if (DEBUG) {
      return new DummyFlightService();
    }
    else {
      return new DefaultFlightService(http);
    }
  },
  deps: [HttpClient]
})
export abstract class FlightService {
  abstract find(from: string, to: string): Observable<Flight[]>;
}
