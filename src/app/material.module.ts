import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// @ts-ignore
import {MatFormFieldModule} from '@angular/material/form-field';
// @ts-ignore
import {MatInputModule} from '@angular/material/input';
// @ts-ignore
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
// @ts-ignore
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {ChangePasswordAdminComponent} from './components/change-password-admin/change-password-admin.component';
// @ts-ignore
import {MatDialogModule} from '@angular/material';
import {EditUserComponent} from './components/edit-user/edit-user.component';
import {ChangePasswordUserComponent} from './components/change-password-user/change-password-user.component';
import {CancelPendingTicketComponent} from './components/list-pending-ticket/cancel-pending-ticket/cancel-pending-ticket.component';
import {DeleteTicketComponent} from './components/delete-ticket/delete-ticket.component';
import {EditTicketComponent} from './components/edit-ticket/edit-ticket.component';
import {UserDialogComponent} from './components/user-dialog/user-dialog.component';
import {MessageUserComponent} from './components/message-user/message-user.component';


// @ts-ignore
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatDividerModule,
    MatButtonModule,
    MatDialogModule,
    MatProgressSpinnerModule
  ],
  exports: [
    CommonModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatDividerModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatDialogModule

  ],
  providers: [
    MatDatepickerModule,
  ],
  entryComponents: [
    ChangePasswordAdminComponent,
    EditUserComponent, ChangePasswordUserComponent,
    CancelPendingTicketComponent, DeleteTicketComponent, EditTicketComponent,
    UserDialogComponent, MessageUserComponent
  ]
})
export class MaterialModule { }
