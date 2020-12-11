import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {TicketService} from "../../service/ticket/ticket.service";

@Component({
  selector: 'app-delete-ticket',
  templateUrl: './delete-ticket.component.html',
  styleUrls: ['./delete-ticket.component.css']
})
export class DeleteTicketComponent implements OnInit {
  private idDelete: any;

  constructor(
    // public dialogRef: MatDialogRef<DeleteTicketComponent>,
    // @Inject(MAT_DIALOG_DATA) public data: any,
    private ticketService: TicketService
  ) { }

  ngOnInit() {
    this.idDelete = 3;
  }

  delete() {
    this.ticketService.deleteTicketService(this.idDelete).subscribe(data => {
      // this.dialogRef.close();
    });
  }
}
