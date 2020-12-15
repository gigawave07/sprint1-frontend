import {Component, OnInit} from '@angular/core';
import {TicketService} from '../../service/ticket/ticket.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {randomString} from '../../utils/RandomUtils';
import {Router} from '@angular/router';

@Component({
  selector: 'app-input-ticket-sell',
  templateUrl: './input-ticket-sell.component.html',
  styleUrls: ['./input-ticket-sell.component.css']
})
export class InputTicketSellComponent implements OnInit {
  protected flightInformationDeparture = [];
  protected flightInformationArrival = [];
  protected idFlightDeparture = 1;
  protected idFlightArrival = 33;
  protected checkArrival = 'false';
  protected formCreate: FormGroup;
  protected totalPriceSell: number;
  protected nativeWindow;

  constructor(
    protected ticketService: TicketService,
    protected formBuilder: FormBuilder,
    protected router: Router,
  ) {
    this.nativeWindow = ticketService.openNewWindow();
  }

  ngOnInit() {
    this.ticketService.findFlightInformationByIDService(this.idFlightDeparture).subscribe(
      (data) => {
        this.flightInformationDeparture = data;
      },
      () => {
      },
      () => {
        if (this.idFlightArrival !== 0) {
          this.ticketService.findFlightInformationByIDService(this.idFlightArrival).subscribe(data => {
            this.flightInformationArrival = data;
            this.checkArrival = 'true';
          });
        }
      }
    );
    const bookingCode = randomString(10);
    this.formCreate = this.formBuilder.group({
      id: [''],
      passengerName: ['',
        [Validators.required, Validators.maxLength(150),
          Validators.pattern('^([a-zA-Z]([ ]?[a-zA-Z])*)([,]([a-zA-Z]([ ]?[a-zA-Z])*)*)*$')]],
      priceDeparture: ['', [Validators.required, Validators.min(0)]],
      priceArrival: ['', [Validators.required, Validators.min(0)]],
      statusCheckin: [''],
      ticketCode: [''],
      booking: [bookingCode],
      employee: [''],
      flightInformation: [''],
      invoice: [''],
      statusPayment: [''],
      appUser: ['', {
        validators:
          [Validators.required,
            Validators.maxLength(40),
            Validators.pattern('^[a-zA-Z0-9]+[@]([a-zA-Z]{3,7})[.]([a-z]{2,3})$')],
        asyncValidators: [this.ticketService.validateEmailUser()],
        updateOn: 'blur'
      }],
      adults: [0, [Validators.required, Validators.min(1), Validators.max(99)]],
      babies: [0, [Validators.required, Validators.min(0), Validators.max(99)]],
    });
  }

  save() {
    this.formCreate.markAllAsTouched();
    if (this.formCreate.valid) {
      this.ticketService.saveTicketService(this.idFlightDeparture, this.idFlightArrival, this.formCreate.value)
        .subscribe(data => {
          this.router.navigateByUrl('listTicket').then(_ => {
          });
        });
    }
  }

  saveAndPrint() {
    this.formCreate.markAllAsTouched();
    if (this.formCreate.valid) {
      this.ticketService.saveTicketService(this.idFlightDeparture, this.idFlightArrival, this.formCreate.value)
        .subscribe(
          (data) => {
          },
          () => {
          },
          () => {
            const newWindow = this.nativeWindow.open('printTicketTwoWay');
            newWindow.location = 'printTicketTwoWay/' + this.formCreate.value.booking + '/'
              + this.formCreate.value.passengerName + '/' + this.idFlightDeparture + '/'
              + this.idFlightArrival;
            this.router.navigateByUrl('listTicket').then(r => {});
            // this.router.navigate(
            // tslint:disable-next-line:max-line-length
            //   [`/printTicketTwoWay/${this.formCreate.value.booking}/${this.formCreate.value.passengerName}/${this.idFlightDeparture}/${this.idFlightArrival}`])
            //   .then(_ => {});
          }
        );
    }
  }

  priceSell(priceDeparture: string, priceArrival: string) {
    if (priceArrival.length === 0) {
      // tslint:disable-next-line:radix
      this.totalPriceSell = Number.parseInt(priceDeparture);
    } else if (priceDeparture.length === 0) {
      // tslint:disable-next-line:radix
      this.totalPriceSell = Number.parseInt(priceArrival);
    } else {
      // tslint:disable-next-line:radix
      this.totalPriceSell = Number.parseInt(priceDeparture) + Number.parseInt(priceArrival);
    }
  }
}
