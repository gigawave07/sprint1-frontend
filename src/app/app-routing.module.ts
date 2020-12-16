import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {DeleteTicketComponent} from './components/delete-ticket/delete-ticket.component';
import {ListTicketComponent} from './components/list-ticket/list-ticket.component';
import {ListEmployeeComponent} from './components/list-employee/list-employee.component';
import {CreateEmployeeComponent} from './components/create-employee/create-employee.component';
import {EditEmployeeComponent} from './components/edit-employee/edit-employee.component';
import {DeleteEmployeeComponent} from './components/delete-employee/delete-employee.component';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from './material.module';
import {MatDialogModule} from '@angular/material';
import {NgxPaginationModule} from 'ngx-pagination';


const routes: Routes = [
  // Quân :
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  // Châu :
  {path: 'deleteTicket', component: DeleteTicketComponent},
  {path: 'listTicket', component: ListTicketComponent},
  // Mai :
  {path: 'listEmployee', component: ListEmployeeComponent},
  {path: 'createEmployee', component: CreateEmployeeComponent},
  {path: 'editEmployee/:id', component: EditEmployeeComponent},
  {path: 'deleteEmployee', component: DeleteEmployeeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule, ReactiveFormsModule, MaterialModule,
    MatDialogModule, FormsModule, NgxPaginationModule],
  exports: [RouterModule],
  declarations: [ListEmployeeComponent, CreateEmployeeComponent, EditEmployeeComponent, DeleteEmployeeComponent]
})
export class AppRoutingModule {
}
