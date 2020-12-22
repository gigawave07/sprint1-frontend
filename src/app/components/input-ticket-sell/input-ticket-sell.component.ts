import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-input-ticket-sell',
  templateUrl: './input-ticket-sell.component.html',
  styleUrls: ['./input-ticket-sell.component.css']
})
export class InputTicketSellComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(data => {
      console.log(data.idFlightDeparture, data.idFlightArrival);
    });
  }

}
