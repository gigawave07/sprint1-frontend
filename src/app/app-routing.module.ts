import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {VerificationEmailComponent} from './components/verification-email/verification-email.component';
import {InformationAdminComponent} from './components/information-admin/information-admin.component';
import {AdminComponent} from './components/admin/admin.component';
import {ListTicketComponent} from './components/list-ticket/list-ticket.component';
import {SearchTicketEmptyComponent} from './components/search-ticket-empty/search-ticket-empty.component';


const routes: Routes = [
  // Quân :
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'verification-email', component: VerificationEmailComponent},
  // Danh
  {
    path: 'admin', component: AdminComponent,
    children: [
      {
        path: 'information', component: InformationAdminComponent
      }
    ]
  },
  // Hoạt
  {path: 'list-ticket', component: ListTicketComponent},
  {path: 'search-ticket-empty', component: SearchTicketEmptyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
