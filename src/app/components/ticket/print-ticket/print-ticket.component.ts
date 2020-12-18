import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TicketService} from '../../../service/ticket/ticket.service';

@Component({
  selector: 'app-print-ticket',
  templateUrl: './print-ticket.component.html',
  styleUrls: ['./print-ticket.component.css']
})
export class PrintTicketComponent implements OnInit {
  protected ticket = [];
  protected idNeed;
  protected bookingCode;
  protected flightInformationDisplay = [];

  constructor(
    private activedRouter: ActivatedRoute,
    protected ticketService: TicketService,
  ) {
  }

  ngOnInit() {
    this.activedRouter.params.subscribe(data => {
      this.idNeed = data.id;
    });
    this.ticketService.findTicketByIDService(this.idNeed).subscribe(data => {
      this.bookingCode = data.booking.bookingCode;
      this.flightInformationDisplay = data.flightInformation;
      this.ticket = data;
    });
  }
}
