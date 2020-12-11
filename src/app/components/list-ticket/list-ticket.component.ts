import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {TicketService} from "../../service/ticket/ticket.service";
import {DeleteTicketComponent} from "../delete-ticket/delete-ticket.component";

@Component({
  selector: 'app-list-ticket',
  templateUrl: './list-ticket.component.html',
  styleUrls: ['./list-ticket.component.css']
})
export class ListTicketComponent implements OnInit {
  public ticketList;

  constructor(
    public ticketService: TicketService,
    public dialog: MatDialog
  ) {
  }

  ngOnInit() {
    this.ticketService.getAllTicketService().subscribe(data => {
      this.ticketList = data;
    });
  }

  openDialogDelete(id: any): void {
    this.ticketService.findTicketByIDService(id).subscribe(varialble => {
      const dialogRef = this.dialog.open(DeleteTicketComponent, {
        width: '950px',
        data: {dataNeed: varialble},
        disableClose: true
      });

      dialogRef.afterClosed().subscribe(result => {
        this.ngOnInit();
      });
    });
  }

  // openDialogEdit(id: any): void {
  //   this.serviceConnectService.findByID(id).subscribe(dataCar => {
  //     const dialogRefEdit = this.dialog.open(EditComponent, {
  //       width: '1050px',
  //       height: '1500px',
  //       data: {dataNeed: dataCar},
  //       disableClose: true
  //     });
  //
  //     dialogRefEdit.afterClosed().subscribe(result => {
  //       this.ngOnInit()
  //     })
  //   });
  // }
}
