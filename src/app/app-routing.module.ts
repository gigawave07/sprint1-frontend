import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {DeleteTicketComponent} from './components/delete-ticket/delete-ticket.component';
import {ListTicketComponent} from './components/list-ticket/list-ticket.component';
import {VerificationEmailComponent} from './components/verification-email/verification-email.component';
import {ListPendingTicketComponent} from './components/list-pending-ticket/list-pending-ticket/list-pending-ticket.component';
import {SearchPendingTicketComponent} from './components/search-pending-ticket/search-pending-ticket/search-pending-ticket.component';
import { CheckinOnlineComponent } from './components/checkin-online/checkin-online.component';
import { PromotionCodeComponent } from './components/promotion-code/promotion-code.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {NgxPaginationModule} from "ngx-pagination";




const routes: Routes = [
  // Quân :
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'verification-email', component: VerificationEmailComponent},
  // Châu :
  {path: 'deleteTicket', component: DeleteTicketComponent},
  {path: 'listTicket', component: ListTicketComponent},
    // Đăng:
  {path: 'list-pending-ticket', component: ListPendingTicketComponent},
  {path: 'search-pending-ticket', component: SearchPendingTicketComponent},
  // PQ Khánh:
  {path: 'checkin-online', component: CheckinOnlineComponent},
  {path: 'promotion-code', component: PromotionCodeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ReactiveFormsModule, CommonModule, FormsModule, NgxPaginationModule],
  exports: [RouterModule],
  declarations: [CheckinOnlineComponent, PromotionCodeComponent]
})
export class AppRoutingModule { }
