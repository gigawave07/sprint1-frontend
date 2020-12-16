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
import {DeleteTicketComponent} from './components/delete-ticket/delete-ticket.component';
import {PrintTicketComponent} from './components/print-ticket/print-ticket.component';
import {HttpClientModule} from '@angular/common/http';
import {ListTicketComponent} from './components/list-ticket/list-ticket.component';
import {MatDialogModule} from '@angular/material/dialog';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    // Quân
    HomeComponent, LoginComponent, RegisterComponent, NavBarComponent, FooterComponent,
    // Châu
    DeleteTicketComponent, PrintTicketComponent, ListTicketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule,
    MatDialogModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
