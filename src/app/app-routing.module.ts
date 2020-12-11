import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {DeleteTicketComponent} from "./components/delete-ticket/delete-ticket.component";
import {ListTicketComponent} from "./components/list-ticket/list-ticket.component";


const routes: Routes = [
  // Quân :
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  // Châu :
  {path: 'deleteTicket', component: DeleteTicketComponent},
  {path: 'listTicket', component: ListTicketComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
