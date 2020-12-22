import {Component, OnInit} from '@angular/core';
import {TicketService} from '../../service/ticket/ticket.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-choose-ticket',
  templateUrl: './choose-ticket.component.html',
  styleUrls: ['./choose-ticket.component.css']
})
export class ChooseTicketComponent implements OnInit {

  private listTicketEmpty;
  private listTicketDepEmpty;
  private dateDeparture;
  private  arraysWay;
  private airline;
  private dateArrival;
  private arrival;
  private departure;
  private arrayOneWay;
  private arrayTowWay;
  private towWay: number;
  private oneWay: number;
  term: any;
  p: any;
  constructor(
    private ticketService: TicketService,
    private route: Router
  ) {
  }

  ngOnInit() {
    if (this.ticketService.getRadio() == 1) {
      this.ticketService.getSearchTicketDepEmpty().subscribe(data => {
        this.listTicketDepEmpty = data;
      });
    }
    if (this.ticketService.getRadio() == 2) {
      this.ticketService.getSearchTicketEmpty().subscribe(data => {
        this.listTicketEmpty = data;
      });
      this.ticketService.getSearchTicketDepEmpty().subscribe(data => {
        this.listTicketDepEmpty = data;
      });
    }
    this.airline = this.ticketService.getAirline();
    this.dateArrival = this.ticketService.getDateArrival();
    this.arrival = this.ticketService.getArrival();
    this.departure = this.ticketService.getDeparture();
    this.dateDeparture = this.ticketService.getDateDeparture();
    const dateDepartureTempt = Date.parse(this.dateDeparture);
    this.arrayOneWay = this.showWeek(dateDepartureTempt);
    const dateArrivalTempt = Date.parse(this.dateArrival);
    this.arrayTowWay = this.showWeek(dateArrivalTempt);
  }
  showWeek(tempt) {
    this.arraysWay = [
      new Date(tempt).toString(), new Date(tempt + 3600 * 24 * 1000).toString(),
      new Date(tempt + 3600 * 24 * 2 * 1000).toString(),
      new Date(tempt + 3600 * 24 * 3 * 1000).toString(),
      new Date(tempt + 3600 * 24 * 4 * 1000).toString(),
      new Date(tempt + 3600 * 24 * 5 * 1000).toString(),
      new Date(tempt + 3600 * 24 * 6 * 1000).toString()];
    return this.arraysWay;
  }
  searchOneWayPage(index, item) {
    this.dateDeparture = index;
    const dateDepartureTempt = new Date(index).toLocaleDateString('en-CA');
    if (item === 1 && (this.ticketService.getRadio() == 1)) {
      this.ticketService.searchTicketEmptyDepService(this.departure, this.arrival, dateDepartureTempt, this.airline);
    }
    if (item === 1 && (this.ticketService.getRadio() == 2)) {
      this.ticketService.searchTicketEmptyDepService(this.departure, this.arrival, dateDepartureTempt, this.airline);
    }
    if (item === 2 && (this.ticketService.getRadio() == 2)) {
      this.ticketService.searchTicketEmptyService(this.departure, this.arrival, dateDepartureTempt, this.arrival, this.airline);
    }
    this.ngOnInit();
  }

  bookingTicket(oneWay: number, towWay: number) {
    if (towWay === undefined) {
      towWay = 0;
    }
    this.route.navigate(['input-ticket-sell', {idFlightDeparture: oneWay, idFlightArrival: towWay}]);
  }
}
