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
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ListTicketComponent} from './components/list-ticket/list-ticket.component';
import {ListPendingTicketComponent} from './components/list-pending-ticket/list-pending-ticket/list-pending-ticket.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CancelPendingTicketComponent} from './components/list-pending-ticket/cancel-pending-ticket/cancel-pending-ticket.component';
import {MatDialogModule} from '@angular/material/dialog';
import { SearchPendingTicketComponent } from './components/search-pending-ticket/search-pending-ticket/search-pending-ticket.component';
import {VerificationEmailComponent} from './components/verification-email/verification-email.component';
import { AuthInterceptor } from './service/AuthInterceptor';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SpinnerOverlayComponent } from './components/spinner-overlay/spinner-overlay.component';
import {NgxLoadingModule} from 'ngx-loading';
import {NgxPaginationModule} from 'ngx-pagination';
import {Ng2SearchPipeModule} from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    // Quân
    HomeComponent, LoginComponent, RegisterComponent, NavBarComponent, FooterComponent, VerificationEmailComponent,
    // Châu
    InputTicketSellComponent, DeleteTicketComponent, EditTicketComponent, PrintTicketComponent, ListTicketComponent,
      // Đăngdcvsdacdasc
    ListPendingTicketComponent, CancelPendingTicketComponent, SearchPendingTicketComponent, SpinnerComponent, SpinnerOverlayComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, MaterialModule, HttpClientModule, NgxPaginationModule, Ng2SearchPipeModule,
    FormsModule, MatDialogModule, ReactiveFormsModule, NgxLoadingModule.forRoot({})],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent],
  entryComponents: [SpinnerOverlayComponent]
})
export class AppModule {
}
