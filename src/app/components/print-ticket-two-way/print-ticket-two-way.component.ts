import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TicketService} from '../../service/ticket/ticket.service';

@Component({
  selector: 'app-print-ticket-two-way',
  templateUrl: './print-ticket-two-way.component.html',
  styleUrls: ['./print-ticket-two-way.component.css']
})
export class PrintTicketTwoWayComponent implements OnInit {
  protected passengerArray = [];
  protected passengerList: string;
  protected bookingCode;
  protected flightDeparture;
  protected flightArrival;
  protected flightInformationDeparture = [];
  protected flightInformationArrival = [];

  constructor(
    private activedRouter: ActivatedRoute,
    protected ticketService: TicketService,
  ) {
  }

  ngOnInit() {
    this.activedRouter.params.subscribe(data => {
      this.bookingCode = data.bookingCode;
      this.passengerList = data.passengerList;
      this.flightDeparture = data.flightDeparture;
      this.flightArrival = data.flightArrival;
    });
    this.ticketService.findFlightInformationByIDService(this.flightDeparture).subscribe(data => {
      this.flightInformationDeparture = data;
    });
    this.ticketService.findFlightInformationByIDService(this.flightArrival).subscribe(data => {
      this.flightInformationArrival = data;
    });
    this.passengerArray = this.passengerList.split(',', this.passengerList.length);
  }

}
