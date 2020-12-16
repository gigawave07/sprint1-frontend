import { Component, OnInit } from '@angular/core';
import {TicketService} from '../../../service/ticket/ticket.service';
import {MatDialog} from '@angular/material/dialog';
import {DeleteTicketComponent} from '../../delete-ticket/delete-ticket.component';
import {CancelPendingTicketComponent} from "../cancel-pending-ticket/cancel-pending-ticket.component";

@Component({
  selector: 'app-list-pending-ticket',
  templateUrl: './list-pending-ticket.component.html',
  styleUrls: ['./list-pending-ticket.component.css']
})
export class ListPendingTicketComponent implements OnInit {
  public ticketList;
  public payTicketList = [];
  public p = 1;
  private isChecked: boolean;



  constructor(
      private ticketService: TicketService,
      private dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    this.ticketService.findAllPendingTicket().subscribe(value => {
      this.ticketList = value;
      // console.log('this.ticketList');
      // console.log(this.ticketList);
    });

  }

  onCheckboxChange($event: Event, ticket: any) {
    // console.log('filter change called. TicketCode: ' + ticketCode);

      // console.log('$event.target');
      // console.log($event.target.checked);

    // @ts-ignore
    this.isChecked = $event.target.checked;
    console.log(ticket.ticketCode + ' ' + this.isChecked);
    if (this.isChecked) {
      this.payTicketList.push(ticket);
      console.log(this.payTicketList);

    } else {
      console.log('ticket');
      console.log(ticket);
      console.log('ticket.id');
      console.log(ticket.id);
      this.payTicketList = this.payTicketList.filter(value => value !== ticket);
      console.log(this.payTicketList);
    }
  }



  openCancelDialogTicket(ticket: any): void {
    const dialogRef = this.dialog.open(CancelPendingTicketComponent, {
      width: '500px',
      data: {dataCancel: ticket},
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
    });
  }

  // openAddDialogTicket() {
  //   const dialogRef = this.dialog.open(TicketAddComponent, {
  //     width: '500px',
  //     disableClose: true
  //   });
  //   dialogRef.afterClosed().subscribe(result => {
  //     this.ngOnInit();
  //   });
  // }
  //
  // openEditDialogTicket(ticket: any) {
  //   const dialogRef = this.dialog.open(TicketEditComponent, {
  //     width: '500px',
  //     data: {dataEdit: ticket},
  //     disableClose: true
  //   });
  //   dialogRef.afterClosed().subscribe(result => {
  //     this.ngOnInit();
  //   });
  // }
  //
  // openViewDialogTicket(ticket: any) {
  //   const dialogRef = this.dialog.open(TicketViewComponent, {
  //     width: '500px',
  //     data: {dataView: ticket},
  //     disableClose: true
  //   });
  //   dialogRef.afterClosed().subscribe(result => {
  //     this.ngOnInit();
  //   });
  // }
  //
  // refreshTicketList() {
  //   this.term = '';
  //   this.p = 1;
  // }

}
