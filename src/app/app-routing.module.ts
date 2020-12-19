import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {MessUserComponent} from './components/mess-user/mess-user.component';
import {SendFeedbackComponent} from './components/send-feedback/send-feedback.component';
import {ConsultantComponent} from './components/consultant/consultant.component';
import {MessageConsultantComponent} from './components/consultant/message-consultant/message-consultant.component';
import {DeleteTicketComponent} from './components/delete-ticket/delete-ticket.component';
import {ListTicketComponent} from './components/list-ticket/list-ticket.component';
import {VerificationEmailComponent} from './components/verification-email/verification-email.component';
import {ListPendingTicketComponent} from './components/list-pending-ticket/list-pending-ticket/list-pending-ticket.component';
import {SearchPendingTicketComponent} from './components/search-pending-ticket/search-pending-ticket/search-pending-ticket.component';


const routes: Routes = [
  // Quân :
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'message', component: MessUserComponent},
  {path: 'send-feedback', component: SendFeedbackComponent},
  {path: 'consultant', component: ConsultantComponent,
    children: [
      {path: 'mess/:id', component: MessageConsultantComponent}
    ]
  },
  {path: 'verification-email', component: VerificationEmailComponent},
  // Châu :
  {path: 'deleteTicket', component: DeleteTicketComponent},
  {path: 'listTicket', component: ListTicketComponent},
    // Đăng:
  {path: 'list-pending-ticket', component: ListPendingTicketComponent},
  {path: 'search-pending-ticket', component: SearchPendingTicketComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
