import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FlightService} from "../../../service/flight-information/flight.service";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {FlightDetailComponent} from "../flight-detail/flight-detail.component";
import {FlightTicketComponent} from "../flight-ticket/flight-ticket.component";

@Component({
  selector: 'app-flight-table',
  templateUrl: './flight-table.component.html',
  styleUrls: ['./flight-table.component.css']
})
export class FlightTableComponent implements OnInit, OnChanges {
  @Input()
  listOneWayTable = null;
  @Input()
  listReturnTable = null;
  @Input()
  dateDeparture;
  @Input()
  dateArrival;
  @Input()
  departure;
  @Input()
  arrival;
  @Input()
  sortChildren;
  @Input()
  quantityInChildrenCpn;
  dialogRef;
  listIdFlight = {
    flightIdOne: '',
    flightIdTwo: ''
  };
  arraysOneWay;
  arraysReturn;

  constructor(private flightService: FlightService,
              private dialog: MatDialog) {
  }

  ngOnInit() {
  }

  ngOnChanges(): void {
    const dateDepartureTempt = Date.parse(this.dateDeparture);
    this.arraysOneWay = [new Date(dateDepartureTempt).toString(), new Date(dateDepartureTempt + 3600 * 24 * 1000).toString(),
      new Date(dateDepartureTempt + 3600 * 24 * 2 * 1000).toString(),
      new Date(dateDepartureTempt + 3600 * 24 * 3 * 1000).toString(),
      new Date(dateDepartureTempt + 3600 * 24 * 4 * 1000).toString()];
    if (this.listReturnTable !== undefined) {
      const dataArrivalTempt = Date.parse(this.dateArrival);
      this.arraysReturn = [new Date(dataArrivalTempt).toString(), new Date(dataArrivalTempt + 3600 * 24 * 1000).toString(),
        new Date(dataArrivalTempt + 3600 * 24 * 2 * 1000).toString(),
        new Date(dataArrivalTempt + 3600 * 24 * 3 * 1000).toString(),
        new Date(dataArrivalTempt + 3600 * 24 * 4 * 1000).toString()];
    }
  }

  searchOneWayPage(index) {
    // Để lấy ngày tháng năm đi theo dạng dd/mm/yyyy
    this.dateDeparture = index;
    const dateDepartureTempt = new Date(index).toLocaleDateString();
    // Lấy list Flight đi
    this.flightService.search(0, this.departure, this.arrival,
      dateDepartureTempt, this.sortChildren).subscribe(data => {
      this.listOneWayTable = data.content;
    });
  }

  searchReturnPage(arrivalReturen) {
    this.dateArrival = arrivalReturen;
    const dataArrivalTempt = new Date(arrivalReturen).toLocaleDateString();
    // Lấy list Flight đi
    this.flightService.search(0, this.arrival, this.departure,
      dataArrivalTempt, this.sortChildren).subscribe(data => {
      this.listReturnTable = data.content;
    });
  }

  dialogFlight(id): void {
    this.flightService.getById(id).subscribe(flight => {
        const dialogRef = this.dialog.open(FlightDetailComponent, {
          width: '80%',
          data: {flightDetails: flight},
          disableClose: true,
          hasBackdrop: true
        });
        dialogRef.afterClosed().subscribe(data => {
          this.ngOnInit();
        });
      }
    );
  }

  flightTwo(id) {
    this.listIdFlight.flightIdTwo = id;
  }

  flightOne(id) {
    this.listIdFlight.flightIdOne = id;
  }

  dialogTicket() {
    this.flightService.getById(this.listIdFlight.flightIdOne).subscribe(flightOneData => {
      const quantityTemp = this.quantityInChildrenCpn;
      if (this.listIdFlight.flightIdTwo !== '') {
        this.flightService.getById(this.listIdFlight.flightIdTwo).subscribe(flightTwoData => {
          this.dialogRef = this.dialog.open(FlightTicketComponent, {
            width: '80%',
            data: {flightDetailsOne: flightOneData, flightDetailsTwo: flightTwoData, quantity: quantityTemp},
            disableClose: true,
            hasBackdrop: true
          });
        });
      } else {
        this.dialogRef = this.dialog.open(FlightTicketComponent, {
          width: '80%',
          data: {flightDetailsOne: flightOneData, flightDetailsTwo: '', quantity: quantityTemp},
          disableClose: true,
          hasBackdrop: true
        });
        this.dialogRef.afterClosed().subscribe(data => this.ngOnInit());
      }
    });
  }
}
