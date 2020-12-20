import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {TicketService} from '../../service/ticket/ticket.service';

@Component({
  selector: 'app-delete-ticket',
  templateUrl: './delete-ticket.component.html',
  styleUrls: ['./delete-ticket.component.css']
})
export class DeleteTicketComponent implements OnInit {
  private ticket;
  private idDelete: any;

  constructor(
    private dialogRef: MatDialogRef<DeleteTicketComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private ticketService: TicketService
  ) { }

  ngOnInit() {
    this.ticket = this.data.dataTicket;
    this.idDelete = this.data.dataTicket.id;
  }

  delete() {
    this.ticketService.deleteTicketService(this.idDelete).subscribe(data => {
      this.dialogRef.close();
    });
  }
}
