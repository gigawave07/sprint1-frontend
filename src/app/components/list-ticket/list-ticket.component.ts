import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {TicketService} from '../../service/ticket/ticket.service';
import {DeleteTicketComponent} from '../delete-ticket/delete-ticket.component';
import {EditTicketComponent} from '../edit-ticket/edit-ticket.component';

@Component({
  selector: 'app-list-ticket',
  templateUrl: './list-ticket.component.html',
  styleUrls: ['./list-ticket.component.css']
})
export class ListTicketComponent implements OnInit {
  protected ticketList;
  protected nativeWindow;

  constructor(
    protected ticketService: TicketService,
    protected dialog: MatDialog
  ) {
    this.nativeWindow = ticketService.openNewWindow();
  }

  ngOnInit() {
    this.ticketService.getAllTicketService().subscribe(data => {
      this.ticketList = data;
    });
  }

  openDialogDelete(id: any): void {
    this.ticketService.findTicketByIDService(id).subscribe(ticket => {
      const dialogRef = this.dialog.open(DeleteTicketComponent, {
        width: '650px',
        height: '330px',
        data: {dataTicket: ticket},
        disableClose: true
      });

      dialogRef.afterClosed().subscribe(result => {
        this.ngOnInit();
      });
    });
  }

  openDialogEdit(id: any): void {
    this.ticketService.findTicketByIDService(id).subscribe(ticket => {
      const dialogRefEdit = this.dialog.open(EditTicketComponent, {
        width: '750px',
        height: '450px',
        data: {dataTicket: ticket},
        disableClose: true
      });

      dialogRefEdit.afterClosed().subscribe(result => {
        this.ngOnInit();
      });
    });
  }

  openWindowPrint(idTicket: number): void {
    const newWindow = this.nativeWindow.open('printTicket');
    newWindow.location = 'printTicket/' + idTicket;
  }
}
