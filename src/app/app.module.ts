import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {MaterialModule} from './material.module';
import {NavBarComponent} from './components/nav-bar/nav-bar.component';
import {FooterComponent} from './components/footer/footer.component';
import {InputTicketSellComponent} from './components/input-ticket-sell/input-ticket-sell.component';
import {DeleteTicketComponent} from './components/delete-ticket/delete-ticket.component';
import {EditTicketComponent} from './components/edit-ticket/edit-ticket.component';
import {PrintTicketComponent} from './components/print-ticket/print-ticket.component';
import {HttpClientModule} from "@angular/common/http";
import {ListTicketComponent} from './components/list-ticket/list-ticket.component';
import {SearchFlightInformationComponent} from './components/flight/search-flight-information/search-flight-information.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { FlightTableComponent } from './components/flight/flight-table/flight-table.component';
import { WeekdaysPipe } from './components/flight/flight-table/weekdays.pipe';
import { FlightDetailComponent } from './components/flight/flight-detail/flight-detail.component';
import { FlightTicketComponent } from './components/flight/flight-ticket/flight-ticket.component';
import { InfoPassengerBookingTicketComponent } from './components/flight/info-passenger-booking-ticket/info-passenger-booking-ticket.component';

@NgModule({
  declarations: [
    AppComponent,
    // Quân
    HomeComponent, LoginComponent, RegisterComponent, NavBarComponent, FooterComponent,
    // Châu
    InputTicketSellComponent, DeleteTicketComponent, EditTicketComponent, PrintTicketComponent, ListTicketComponent,
    // Đin
    SearchFlightInformationComponent,
    FlightTableComponent,
    WeekdaysPipe,
    FlightDetailComponent,
    FlightTicketComponent,
    InfoPassengerBookingTicketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
