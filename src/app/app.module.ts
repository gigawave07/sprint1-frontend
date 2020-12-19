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
import {EditTicketComponent} from './components/edit-ticket/edit-ticket.component';
import {PrintTicketComponent} from './components/print-ticket/print-ticket.component';
import {HttpClientModule} from '@angular/common/http';
import {ListPendingTicketComponent} from './components/list-pending-ticket/list-pending-ticket/list-pending-ticket.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CancelPendingTicketComponent} from './components/list-pending-ticket/cancel-pending-ticket/cancel-pending-ticket.component';
import {MatDialogModule} from '@angular/material/dialog';
import { SearchPendingTicketComponent } from './components/search-pending-ticket/search-pending-ticket/search-pending-ticket.component';
import {VerificationEmailComponent} from './components/verification-email/verification-email.component';
import {MAT_DIALOG_DATA, } from '@angular/material';
import {MatDialogRef} from '@angular/material/typings/esm5/dialog';
import {DatePipe} from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    // Quân
    HomeComponent, LoginComponent, RegisterComponent, NavBarComponent, FooterComponent, VerificationEmailComponent,
    // Châu
    InputTicketSellComponent, EditTicketComponent, PrintTicketComponent,
      // Đăng
    ListPendingTicketComponent, CancelPendingTicketComponent, SearchPendingTicketComponent
  ],
  imports: [BrowserModule, AppRoutingModule, MaterialModule, HttpClientModule, FormsModule, MatDialogModule, ReactiveFormsModule ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule {
}
