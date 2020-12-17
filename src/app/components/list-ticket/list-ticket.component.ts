import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {TicketService} from '../../service/ticket/ticket.service';
// import {DeleteTicketComponent} from '../delete-ticket/delete-ticket.component';

@Component({
  selector: 'app-list-ticket',
  templateUrl: './list-ticket.component.html',
  styleUrls: ['./list-ticket.component.css']
})
export class ListTicketComponent implements OnInit {
  public ticketList;
  totalPage: any = [];
  numberPage: number;

  constructor(
    public ticketService: TicketService,
    public dialog: MatDialog
  ) {
  }

  ngOnInit() {
    this.getDataPage(0);
  }
  getDataPage(pageIndex) {
    this.ticketService.getAllTicketService(pageIndex).subscribe(data => {
      this.ticketList = data;
      this.totalPage = [];
      for (let i = 0; i < data.totalPages; i++) {
        this.totalPage.push(i + 1);
      }
    });
  }

  // openDialogDelete(id: any): void {
  //   this.ticketService.findTicketByIDService(id).subscribe(varialble => {
  //     const dialogRef = this.dialog.open(DeleteTicketComponent, {
  //       width: '950px',
  //       data: {dataNeed: varialble},
  //       disableClose: true
  //     });
  //
  //     dialogRef.afterClosed().subscribe(result => {
  //       this.ngOnInit();
  //     });
  //   });
  // }
  search(key: string, inputSearch: string) {
    if (inputSearch !== '') {
    this.ticketService.searchTicketService(key, inputSearch).subscribe(data => {
      this.ticketList = data;
    });
    } else {
      this.ngOnInit();
    }
  }

  gotoPage(index)   {
    this.numberPage = index;
    console.log(this.numberPage);
    this.getDataPage(index - 1);
  }
}
