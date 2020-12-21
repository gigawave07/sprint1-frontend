import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {CancelPendingTicketComponent} from './components/list-pending-ticket/cancel-pending-ticket/cancel-pending-ticket.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MAT_DIALOG_DEFAULT_OPTIONS, MatIconModule, MatRadioModule, MatStepperModule, MatTabsModule} from '@angular/material';
import {MatDialogModule} from '@angular/material';
import {FlightDetailComponent} from './components/flight/flight-detail/flight-detail.component';
import {FlightTicketComponent} from './components/flight/flight-ticket/flight-ticket.component';
import {InfoPassengerBookingTicketComponent} from './components/flight/info-passenger-booking-ticket/info-passenger-booking-ticket.component';
import {LoginComponent} from './components/login/login.component';
import {ChooseTicketComponent} from './components/flight/alertError/choose-ticket/choose-ticket.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatDividerModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatIconModule,
    MatDialogModule,
    MatStepperModule,
    MatTabsModule,
  ],
  exports: [
    CommonModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatDividerModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatIconModule,
    MatDialogModule,
    MatStepperModule,
    MatTabsModule,
  ],
  providers: [
    MatDatepickerModule, {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ],
  entryComponents: [
    CancelPendingTicketComponent,
    FlightDetailComponent, FlightTicketComponent, InfoPassengerBookingTicketComponent, LoginComponent, ChooseTicketComponent],
  bootstrap: [InfoPassengerBookingTicketComponent]
})
export class MaterialModule {
}
