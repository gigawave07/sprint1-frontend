import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";
import {LuggageService} from "../../../service/luggage/luggage.service";

@Component({
  selector: 'app-info-passenger-booking-ticket',
  templateUrl: './info-passenger-booking-ticket.component.html',
  styleUrls: ['./info-passenger-booking-ticket.component.css']
})
export class InfoPassengerBookingTicketComponent implements OnInit {
  flightOne;
  flightTwo;
  quantityTicketOne;
  quantityTicketTwo;
  passengerForm: FormGroup;
  passengerList: FormArray;
  listLuggage;

  constructor(private dialogRef: MatDialogRef<InfoPassengerBookingTicketComponent>,
              @Inject(MAT_DIALOG_DATA) private data: any,
              private formBuilder: FormBuilder,
              private luggageService: LuggageService) {
  }

  ngOnInit() {
    this.luggageService.getAll().subscribe( data => {
      this.listLuggage = data;
    });
    this.flightOne = this.data.flightDetailOne;
    this.flightTwo = this.data.flightDetailTwo;
    this.quantityTicketOne = this.data.quantityOne;
    this.quantityTicketTwo = this.data.quantityTwo;
    this.passengerForm = this.formBuilder.group({
      fullName: [''],
      birthday: [''],
      address: [''],
      email: [''],
      gender: [true],
      phoneNumber: [''],
      identityNumber: [''],
      luggage: ['1'],
      passengerList: this.formBuilder.array([this.createPassengerChildren()])
    });
    this.passengerList = this.passengerForm.get('passengerList') as FormArray;
  }
  cancel() {
    this.dialogRef.close();
  }
  createPassengerChildren(): FormGroup {
    return this.formBuilder.group({
      fullName: [''],
      birthday: [''],
      address: [''],
      email: [''],
      gender: ['1'],
      phoneNumber: [''],
      identityNumber: [''],
      luggage: ['1'],
    });
  }

  addItem(): void {
    this.passengerList.push(this.createPassengerChildren());
  }
  deleteItem(index): void {
    this.passengerList.removeAt(index);
  }
}
