import {Component, OnInit} from '@angular/core';
import {TicketService} from '../../service/ticket/ticket.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {format} from 'url';


@Component({
  selector: 'app-search-ticket-empty',
  templateUrl: './search-ticket-empty.component.html',
  styleUrls: ['./search-ticket-empty.component.css']
})
export class SearchTicketEmptyComponent implements OnInit {
  radio: number;
  dayNow = new Date().toLocaleDateString();
  // tslint:disable-next-line:variable-name
  arrival_date: string;

  constructor(private ticketService: TicketService) {
  }

  ngOnInit() {
  }

  // tslint:disable-next-line:variable-name
  searchTicketEmpty(departure: string, arrival: string, departure_date: string, arrival_date: string, airline: string) {
    this.ticketService.get(this.radio);
    if (this.radio == 1) {
      if (departure_date === '') {
        departure_date = ' ';
      }
      this.ticketService.searchTicketEmptyDepService(departure, arrival, departure_date, airline);
    }
    if (this.radio == 2) {
      if (departure_date === '' && arrival_date === '') {
        arrival_date = ' ';
        departure_date = ' ';
      }
      if (departure_date === '') {
        departure_date = ' ';
      }
      if (arrival_date === '') {
        arrival_date = ' ';
      }
      this.ticketService.searchTicketEmptyService(departure, arrival, departure_date, arrival_date, airline);
      this.ticketService.searchTicketEmptyDepService(departure, arrival, departure_date, airline);
    }
  }
}
