import { Component, OnInit } from '@angular/core';
import {TicketService} from '../../service/ticket/ticket.service';
import {FormBuilder, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-search-ticket-empty',
  templateUrl: './search-ticket-empty.component.html',
  styleUrls: ['./search-ticket-empty.component.css']
})
export class SearchTicketEmptyComponent implements OnInit {
  radio = 1;
  // tslint:disable-next-line:variable-name
  arrival_date: string;
  constructor(private ticketService: TicketService) {
  }

  ngOnInit() {
  }

  searchTicketEmpty(value: string, value2: string, value3: string, value4: string, value5: string) {
    console.log(value + value2 + value3 + value4 + value5);
    this.ticketService.searchTicketEmptyService(value, value2, value3, value4, value5).subscribe();
  }
}
