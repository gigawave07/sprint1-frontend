import { Component, OnInit } from '@angular/core';
import {BookingService} from '../../../../service/booking/booking.service';

@Component({
  selector: 'app-payment-history',
  templateUrl: './payment-history.component.html',
  styleUrls: ['./payment-history.component.css']
})
export class PaymentHistoryComponent implements OnInit {
  listBooking;
  constructor(
    private bookingService: BookingService
  ) { }

  ngOnInit() {
    // this.bookingService.getAllPassenger(0).subscribe(data => {
    //   this.listBooking = this.bookingService;
    //   console.log(data);
    // });
  }

}
