import { Component, OnInit, Input, EventEmitter, Output, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { Flight } from '../../entities/flight';

@Component({
  selector: 'flight-card',
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.css']
})
export class FlightCardComponent implements OnInit, OnDestroy, OnChanges {

  @Input() item: Flight;
  @Input() selected: boolean;
  @Output() selectedChange = new EventEmitter<boolean>();

  constructor() { 
    console.debug('ctor', this.selected, this.item);
  }

  ngOnInit() {
    // setTimeout(() => this.selectedChange.next(true), 0);

    console.debug('ngOnInit', this.selected, this.item);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.debug('ngOnChanges', this.selected, this.item);
    if (changes['item']) {
      console.debug('\t item changed');
    }
    if (changes['selected']) {
      console.debug('\t selected changed');
    }

  }

  ngOnDestroy(): void {
    console.debug('ngOnDestroy', this.selected, this.item);
  }


  select(): void {
    this.selected = true;
    this.selectedChange.next(true);
  }

  deselect(): void {
    this.selected = false;
    this.selectedChange.next(false);
  }

}
