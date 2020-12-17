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
  protected idFlightDeparture = 3;
  protected idFlightArrival = 0;
  protected checkArrival = 'false';
  protected formCreate: FormGroup;
  protected totalPriceSell: number;
  protected nativeWindow;
  protected message = 'Nothing';

  constructor(
    protected ticketService: TicketService,
    protected formBuilder: FormBuilder,
    protected router: Router,
  ) {
    this.nativeWindow = ticketService.openNewWindow();
  }

  ngOnInit() {
    if (this.idFlightDeparture !== 0) {
      this.ticketService.findFlightInformationByIDService(this.idFlightDeparture).subscribe(
        (data) => {
          this.flightInformationDeparture = data;
        },
        () => {
          const NOTICE = 'Không tìm thấy trang';
          this.router.navigate(['notice-page', {message: NOTICE}]).then(r => {
          });
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
      const BOOKING_CODE = randomString(10);
      this.formCreate = this.formBuilder.group({
        id: [''],
        passengerName: ['',
          [Validators.required, Validators.maxLength(150),
            Validators.pattern('^([a-zA-Z]([ ]?[a-zA-Z])*)([,]([a-zA-Z]([ ]?[a-zA-Z])*)*)*$')]],
        priceDeparture: ['', [Validators.required, Validators.pattern('^([0-9]+([.][0-9]+)?)$')]],
        priceArrival: [0, [Validators.required, Validators.pattern('^([0-9]+([.][0-9]+)?)$')]],
        statusCheckin: [''],
        ticketCode: [''],
        booking: [BOOKING_CODE],
        employee: [1],
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
        adults: ['', [Validators.required, Validators.pattern('^([0-9]+)$'),
          Validators.min(1), Validators.max(99)]],
        babies: ['', [Validators.required, Validators.pattern('^([0-9]+)$'), Validators.max(99)]],
      });
    } else {
      const NOTICE = 'Lỗi hệ thống';
      this.router.navigate(['notice-page', {message: NOTICE}]).then(r => {
      });
    }
  }

  save() {
    this.formCreate.markAllAsTouched();
    if (this.formCreate.valid) {
      this.message = 'Đang tiến hành lưu vé. Vui lòng chờ!';
      this.ticketService.saveTicketService(this.idFlightDeparture, this.idFlightArrival, this.formCreate.value)
        .subscribe(
          (data) => {
          },
          () => {
            const NOTICE = 'Lưu vé không thành công';
            const URL = 'http://localhost:4200/list-ticket';
            this.router.navigate(['notice-page', {message: NOTICE, path: URL}]).then(r => {
            });
          },
          () => {
            this.router.navigateByUrl('list-ticket').then(_ => {
            });
          }
        );
    }
  }

  saveAndPrint() {
    this.formCreate.markAllAsTouched();
    if (this.formCreate.valid) {
      this.message = 'Đang tiến hành lưu và in vé. Vui lòng chờ!';
      this.ticketService.saveTicketService(this.idFlightDeparture, this.idFlightArrival, this.formCreate.value)
        .subscribe(
          (data) => {
          },
          () => {
            const NOTICE = 'Lưu vé không thành công';
            const URL = 'http://localhost:4200/list-ticket';
            this.router.navigate(['notice-page', {message: NOTICE, path: URL}]).then(r => {
            });
          },
          () => {
            const NEW_WINDOW = this.nativeWindow.open('print-ticket-two-way');
            NEW_WINDOW.location = 'print-ticket-two-way/' + this.formCreate.value.booking + '/'
              + this.formCreate.value.passengerName + '/' + this.idFlightDeparture + '/'
              + this.idFlightArrival;
            this.router.navigateByUrl('list-ticket').then(r => {
            });
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
