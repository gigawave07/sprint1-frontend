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
import {BaoCaoComponentComponent} from "./components/report-statistic/bao-cao-thong-ke/bao-cao/bao-cao-component/bao-cao-component.component";


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
  // Nhật
  {path: 'report', component: BaoCaoComponentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
