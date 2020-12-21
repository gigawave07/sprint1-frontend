import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MaterialModule} from './material.module';

import {NgxLoadingModule} from 'ngx-loading';
import {NgxPaginationModule} from 'ngx-pagination';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {SearchFlightInformationComponent} from './components/flight/search-flight-information/search-flight-information.component';
import { FlightTableComponent } from './components/flight/flight-table/flight-table.component';
import {FlightTicketComponent} from './components/flight/flight-ticket/flight-ticket.component';
import {WeekdaysPipe} from './components/flight/flight-table/weekdays.pipe';
import {FlightDetailComponent} from './components/flight/flight-detail/flight-detail.component';
import {InfoPassengerBookingTicketComponent} from './components/flight/info-passenger-booking-ticket/info-passenger-booking-ticket.component';
import { ChooseTicketComponent } from './components/flight/alertError/choose-ticket/choose-ticket.component';
import { PaymentHistoryComponent } from './components/flight/payment-history/payment-history/payment-history.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material';
import {AuthInterceptor} from './service/AuthInterceptor';

@NgModule({
  declarations: [
    AppComponent,
    SearchFlightInformationComponent,
    FlightTableComponent,
    WeekdaysPipe,
    FlightDetailComponent,
    FlightTicketComponent,
    InfoPassengerBookingTicketComponent,
    ChooseTicketComponent,
    PaymentHistoryComponent
  ],
  imports: [BrowserModule, AppRoutingModule, MaterialModule, HttpClientModule, NgxPaginationModule, Ng2SearchPipeModule,
    FormsModule, MatDialogModule, ReactiveFormsModule, NgxLoadingModule.forRoot({})],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent],
})
export class AppModule {
}
