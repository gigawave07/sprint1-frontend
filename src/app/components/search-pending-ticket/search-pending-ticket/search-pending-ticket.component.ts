import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {TicketService} from '../../../service/ticket/ticket.service';

@Component({
  selector: 'app-search-pending-ticket',
  templateUrl: './search-pending-ticket.component.html',
  styleUrls: ['./search-pending-ticket.component.css']
})
export class SearchPendingTicketComponent implements OnInit {
  public formEmployee: FormGroup;

  constructor(
      public formBuilder: FormBuilder,
      // public dialogRef: MatDialogRef<EmployeeAddComponent>,
      private ticketService: TicketService
      // @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    // this.formEmployee = this.formBuilder.group({
    //
    // });
  }

}
