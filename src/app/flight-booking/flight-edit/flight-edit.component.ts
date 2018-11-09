import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-flight-edit',
  templateUrl: './flight-edit.component.html',
  styleUrls: ['./flight-edit.component.css']
})
export class FlightEditComponent implements OnInit {

  id: string;
  showDetails: string;

  constructor(private route: ActivatedRoute) {

    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.showDetails = params['showDetails'];
      console.debug('read params');
    })

    console.debug('rest of ctor');
  }

  ngOnInit() {
  }

}
