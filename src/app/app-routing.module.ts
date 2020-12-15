import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {ListTicketComponent} from './components/list-ticket/list-ticket.component';
import {EditTicketComponent} from './components/edit-ticket/edit-ticket.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MaterialModule} from './material.module';
import {InputTicketSellComponent} from './components/input-ticket-sell/input-ticket-sell.component';
import {PrintTicketComponent} from './components/print-ticket/print-ticket.component';
import { PrintTicketTwoWayComponent } from './components/print-ticket-two-way/print-ticket-two-way.component';

const routes: Routes = [
  // Quân :
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  // Châu :
  {path: 'listTicket', component: ListTicketComponent},
  {path: 'inputTicketSell', component: InputTicketSellComponent},
  {path: 'printTicket/:id', component: PrintTicketComponent},
  {path: 'printTicketTwoWay/:bookingCode/:passengerList/:flightDeparture/:flightArrival',
    component: PrintTicketTwoWayComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ReactiveFormsModule, MatDialogModule, MatInputModule, MaterialModule],
  exports: [RouterModule],
  declarations: [EditTicketComponent, InputTicketSellComponent, PrintTicketTwoWayComponent]
})
export class AppRoutingModule {
}
