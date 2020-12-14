import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {TicketService} from '../../../service/ticket/ticket.service';

@Component({
  selector: 'app-cancel-pending-ticket',
  templateUrl: './cancel-pending-ticket.component.html',
  styleUrls: ['./cancel-pending-ticket.component.css']
})
export class CancelPendingTicketComponent implements OnInit {
  public ticketCancel;

  constructor(
      public dialogRef: MatDialogRef<CancelPendingTicketComponent>,
      public ticketService: TicketService,
      @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.ticketCancel = this.data.dataCancel;
    console.log(this.ticketCancel);
  }

  cancelTicket() {
    this.ticketService.cancelPendingTicket(this.ticketCancel.id, this.ticketCancel).subscribe(value => {
      this.dialogRef.close();
    });
  }
}
