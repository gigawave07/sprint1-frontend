import {Component, OnInit} from '@angular/core';
import {TicketService} from '../../service/ticket/ticket.service';

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
    private ticketService: TicketService
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
    this.arraysWay = [new Date(tempt).toString(), new Date(tempt + 3600 * 24 * 1000).toString(),
      new Date(tempt + 3600 * 24 * 2 * 1000).toString(),
      new Date(tempt + 3600 * 24 * 3 * 1000).toString(),
      new Date(tempt + 3600 * 24 * 4 * 1000).toString(),
      new Date(tempt + 3600 * 24 * 5 * 1000).toString(),
      new Date(tempt + 3600 * 24 * 6 * 1000).toString()];
    return this.arraysWay;
  }
  searchOneWayPage(index, item) {
    // Để lấy ngày tháng năm đi theo dạng dd/mm/yyyy
    this.dateDeparture = index;
    console.log(this.dateDeparture);
    const dateDepartureTempt = new Date(index).toLocaleDateString();
    console.log(dateDepartureTempt);
    // Lấy list Flight đi
    // this.ticketService.searchWeek(0, this.departure, this.arrival,
    //   dateDepartureTempt, this.sortChildren).subscribe(data => {
    //   this.listOneWayTable = data.content;
    // });
  }

  show() {
    console.log(this.towWay + this.oneWay);
  }
}
