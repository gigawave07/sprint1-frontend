import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
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

  // Mai :
  {path: 'list-employee', component: ListEmployeeComponent},
  {path: 'list-employee/create-employee', component: CreateEmployeeComponent},
  {path: 'list-employee/edit-employee/:id', component: EditEmployeeComponent},
  {path: 'delete-employee', component: DeleteEmployeeComponent},

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

  // Đăng:caca
  {path: 'list-pending-ticket', component: ListPendingTicketComponent},
  {path: 'search-pending-ticket', component: SearchPendingTicketComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule, ReactiveFormsModule, MaterialModule,
    MatDialogModule, FormsModule, NgxPaginationModule],
  exports: [RouterModule],
  declarations: [ListEmployeeComponent, CreateEmployeeComponent, EditEmployeeComponent, DeleteEmployeeComponent,
    EmployeeComponent]
})
export class AppRoutingModule {
}
