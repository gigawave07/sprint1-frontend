import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {DeleteTicketComponent} from './components/delete-ticket/delete-ticket.component';
import {ListTicketComponent} from './components/list-ticket/list-ticket.component';
import {VerificationEmailComponent} from './components/verification-email/verification-email.component';
import {ListPendingTicketComponent} from './components/list-pending-ticket/list-pending-ticket/list-pending-ticket.component';
import {SearchPendingTicketComponent} from './components/search-pending-ticket/search-pending-ticket/search-pending-ticket.component';
import {PassengerComponent} from './components/passenger/passenger.component';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DeletePassengerComponent } from './components/delete-passenger/delete-passenger.component';
import { CreatePassengerComponent } from './components/create-passenger/create-passenger.component';
import { UpdatePassengerComponent } from './components/update-passenger/update-passenger.component';
import {DatePipe} from '@angular/common';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule, MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatRadioModule, MatSelectModule,
  MatSidenavModule
} from '@angular/material';
import {MatDatepickerModule} from '@angular/material';
import { ChangePasswordEmployeeComponent } from './components/change-password-employee/change-password-employee.component';
import { EmployeeInforComponentComponent } from './components/employee-infor-component/employee-infor-component.component';
import { EmployeeinforComponent } from './components/employeeinfor/employeeinfor.component';


const routes: Routes = [
  // Quân :
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'verification-email', component: VerificationEmailComponent},
  // Đăng:
  {path: 'list-pending-ticket', component: ListPendingTicketComponent},
  {path: 'search-pending-ticket', component: SearchPendingTicketComponent},
  // Quoc
  {path: 'list-passenger', component: PassengerComponent},
  {path: 'create-passenger', component: CreatePassengerComponent},
  {path: 'update-passenger', component: UpdatePassengerComponent},
  {path: 'update-passenger/:id', component: UpdatePassengerComponent},
];

@NgModule({
  // tslint:disable-next-line:max-line-length
  imports: [RouterModule.forRoot(routes), CommonModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatDatepickerModule, MatFormFieldModule, MatInputModule, MatRadioModule, MatSidenavModule, MatButtonModule, MatCardModule, MatCheckboxModule, MatSelectModule, MatDialogModule],
  exports: [RouterModule],
  // tslint:disable-next-line:max-line-length
  declarations: [PassengerComponent, DeletePassengerComponent, CreatePassengerComponent, UpdatePassengerComponent, ChangePasswordEmployeeComponent, EmployeeInforComponentComponent, EmployeeinforComponent],
  entryComponents: [DeletePassengerComponent]
})

export class AppRoutingModule {
}
