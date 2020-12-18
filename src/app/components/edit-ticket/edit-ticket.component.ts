import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TicketService} from '../../service/ticket/ticket.service';

@Component({
  selector: 'app-edit-ticket',
  templateUrl: './edit-ticket.component.html',
  styleUrls: ['./edit-ticket.component.css']
})
export class EditTicketComponent implements OnInit {
  protected formEdit: FormGroup;
  protected bookingCodeDisplay;
  protected passengerEdit;
  protected appUserEdit;
  protected appUserList;
  protected flightInformationDisplay;

  constructor(
    protected dialogRef: MatDialogRef<EditTicketComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    protected formBuilder: FormBuilder,
    private ticketService: TicketService
  ) {
  }

  ngOnInit() {
    this.bookingCodeDisplay = this.data.dataTicket.booking;
    this.flightInformationDisplay = this.data.dataTicket.flightInformation;
    this.formEdit = this.formBuilder.group({
      id: [this.data.dataTicket.id],
      priceArrival: [this.data.dataTicket.priceArrival],
      priceDeparture: [this.data.dataTicket.priceDeparture],
      statusCheckin: [this.data.dataTicket.statusCheckin],
      ticketCode: [this.data.dataTicket.statusCheckin],
      booking: [this.data.dataTicket.booking],
      employee: [this.data.dataTicket.employee],
      flightInformation: [this.data.dataTicket.flightInformation],
      invoice: [this.data.dataTicket.invoice],
      passengerName: [this.data.dataTicket.passenger,
        [Validators.required, Validators.minLength(10), Validators.maxLength(50),
          Validators.pattern('^([a-zA-Z]([ ]?[a-zA-Z])*)$')]],
      statusPayment: [this.data.dataTicket.statusPayment],
      appUser: ['', {
        validators:
          [Validators.required, Validators.maxLength(50),
            Validators.pattern('^[a-zA-Z0-9]+[@]([a-zA-Z]{3,7})[.]([a-z]{2,3})$')],
        asyncValidators: [this.ticketService.validateEmailUser()],
        updateOn: 'blur'
      }],
    });
    this.ticketService.getAllAppUserService().subscribe(data => {
      this.appUserList = data;
    });
  }

  edit() {
    this.formEdit.markAllAsTouched();
    if (this.formEdit.valid) {
      this.passengerEdit = this.formEdit.value.passengerName;
      for (const ELEMENT of this.appUserList) {
        if (ELEMENT.email === this.formEdit.value.appUser) {
          this.appUserEdit = ELEMENT.id;
          break;
        }
      }
      const ID_EDIT = this.data.dataTicket.id;
      this.ticketService.editTicketService(ID_EDIT, this.passengerEdit, this.appUserEdit, this.formEdit.value)
        .subscribe(data => {
          this.dialogRef.close();
        });
    }
  }
}
