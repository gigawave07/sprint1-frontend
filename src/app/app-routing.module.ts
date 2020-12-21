import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {VerificationEmailComponent} from './components/verification-email/verification-email.component';
import {InformationAdminComponent} from './components/information-admin/information-admin.component';
import {AdminComponent} from './components/admin/admin.component';
import {EditUserComponent} from './components/edit-user/edit-user.component';
import {ChangePasswordUserComponent} from './components/change-password-user/change-password-user.component';
import {InformationUserComponent} from './components/information-user/information-user.component';
import {DetailUserComponent} from './components/detail-user/detail-user.component';
import {SearchPendingTicketComponent} from './components/search-pending-ticket/search-pending-ticket/search-pending-ticket.component';
import {ListPendingTicketComponent} from './components/list-pending-ticket/list-pending-ticket/list-pending-ticket.component';
import {ListEmployeeComponent} from './components/list-employee/list-employee.component';
import {CreateEmployeeComponent} from './components/create-employee/create-employee.component';
import {EditEmployeeComponent} from './components/edit-employee/edit-employee.component';
import {DeleteEmployeeComponent} from './components/delete-employee/delete-employee.component';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from './material.module';
import {MatDialogModule} from '@angular/material';
import {NgxPaginationModule} from 'ngx-pagination';
import {EmployeeComponent} from './components/employee/employee.component';
// tslint:disable-next-line:max-line-length
import {BaoCaoComponentComponent} from './components/report-statistic/bao-cao-thong-ke/bao-cao/bao-cao-component/bao-cao-component.component';
import {ListTicketComponent} from './components/list-ticket/list-ticket.component';
import {EditTicketComponent} from './components/edit-ticket/edit-ticket.component';
import {MatInputModule} from '@angular/material/input';
import {InputTicketSellComponent} from './components/input-ticket-sell/input-ticket-sell.component';
import {PrintTicketComponent} from './components/print-ticket/print-ticket.component';
import { PrintTicketTwoWayComponent } from './components/print-ticket-two-way/print-ticket-two-way.component';
import { NoticePageComponent } from './components/notice-page/notice-page.component';
import { PassengerComponent } from './components/passenger/passenger.component';
import { CreatePassengerComponent } from './components/create-passenger/create-passenger.component';
import { DeletePassengerComponent } from './components/delete-passenger/delete-passenger.component';
import { EditPassengerComponent } from './components/edit-passenger/edit-passenger.component';
import { ListPassengerComponent } from './components/list-passenger/list-passenger.component';
import {MatRadioModule} from '@angular/material/radio';
import { DatePipe } from '@angular/common';
import { EmployeeInfoComponent } from './components/employee-info/employee-info.component';
import { EmployeeDetailComponent } from './components/employee-detail/employee-detail.component';
import {ChangePasswordEmployeeComponent } from './components/change-password-employee/change-password-employee.component';
import {MatIconModule} from "@angular/material/icon";

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
  // Đạt
  {path: 'detail-user', component: DetailUserComponent},
  {
    path: 'informationUser', component: InformationUserComponent,
    children: [
      {
        path: 'detailUser', component: DetailUserComponent
      },
      {path: 'editUser', component: EditUserComponent},
      {path: 'changPassword', component: ChangePasswordUserComponent},
      {path: 'list-pending-ticket', component: ListPendingTicketComponent},
      {path: 'search-pending-ticket', component: SearchPendingTicketComponent}
    ]
  },
  // Quốc
  {
    path: 'passenger', component: PassengerComponent,
    children: [
      {path: 'list-Passenger', component: ListPassengerComponent},
      {path: 'list-Passenger/create-Passenger', component: CreatePassengerComponent},
      {path: 'list-Passenger/edit-Passenger/:id', component: EditPassengerComponent},
      {path: 'employee-Detail', component: EmployeeDetailComponent},
    ]
  },
  // {
  //   path: 'employee-info', component: EmployeeInfoComponent,
  //   children: [
  //     {path: 'employee-Detail', component: EmployeeDetailComponent},
  //   ]
  // },

  // Đăng:caca
  {path: 'list-pending-ticket', component: ListPendingTicketComponent},
  {path: 'search-pending-ticket', component: SearchPendingTicketComponent},
  // Nhật
  {path: 'report', component: BaoCaoComponentComponent},

  // Mai :
  {
    path: 'employee', component: EmployeeComponent,
    children: [
      {path: 'listEmployee', component: ListEmployeeComponent},
      {path: 'listEmployee/createEmployee', component: CreateEmployeeComponent},
      {path: 'listEmployee/editEmployee/:id', component: EditEmployeeComponent},
      {path: 'deleteEmployee', component: DeleteEmployeeComponent},
    ]
  },
  // Châu :
  {path: 'list-ticket', component: ListTicketComponent},
  {path: 'input-ticket-sell', component: InputTicketSellComponent},
  {path: 'print-ticket/:id', component: PrintTicketComponent},
  {path: 'print-ticket-two-way/:bookingCode/:passengerList/:flightDeparture/:flightArrival',
    component: PrintTicketTwoWayComponent},
  {path: 'notice-page', component: NoticePageComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes), CommonModule, ReactiveFormsModule, MaterialModule,
        MatDialogModule, FormsModule, NgxPaginationModule, MatRadioModule, MatIconModule],
  exports: [RouterModule],
  declarations: [ListEmployeeComponent, CreateEmployeeComponent, EditEmployeeComponent, DeleteEmployeeComponent,
    // tslint:disable-next-line:max-line-length
    EmployeeComponent, EditTicketComponent, InputTicketSellComponent, PrintTicketTwoWayComponent, NoticePageComponent, PassengerComponent, CreatePassengerComponent, DeletePassengerComponent, EditPassengerComponent, ListPassengerComponent, EmployeeInfoComponent, EmployeeDetailComponent, ChangePasswordEmployeeComponent
  ],
  providers: [
    DatePipe
  ]
})
export class AppRoutingModule { }
