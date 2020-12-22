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
// tslint:disable-next-line:max-line-length
import {BaoCaoComponentComponent} from './components/report-statistic/bao-cao-thong-ke/bao-cao/bao-cao-component/bao-cao-component.component';
import {ListTicketComponent} from './components/list-ticket/list-ticket.component';
import {EditTicketComponent} from './components/edit-ticket/edit-ticket.component';
import {InputTicketSellComponent} from './components/input-ticket-sell/input-ticket-sell.component';
import {PrintTicketComponent} from './components/print-ticket/print-ticket.component';
import {MessageNoticeEmployeeComponent} from './components/message-notice-employee/message-notice-employee.component';
import {PrintTicketTwoWayComponent} from './components/print-ticket-two-way/print-ticket-two-way.component';
import {NoticePageComponent} from './components/notice-page/notice-page.component';
import {PromotionListForCustomerComponent} from './components/promotion/promotion-list-for-customer/promotion-list-for-customer.component';

import {MessUserComponent} from './components/mess-user/mess-user.component';
import {SendFeedbackComponent} from './components/send-feedback/send-feedback.component';
import {ConsultantComponent} from './components/consultant/consultant.component';
import {MessageConsultantComponent} from './components/consultant/message-consultant/message-consultant.component';
// KhánhPQ
import {CheckinOnlineComponent} from './components/checkin-online/checkin-online.component';
import {PromotionCodeComponent} from './components/promotion-code/promotion-code.component';

const routes: Routes = [
  // Quân :
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'verification-email', component: VerificationEmailComponent},
  // Vinh
  {path: 'message', component: MessUserComponent},
  {path: 'send-feedback', component: SendFeedbackComponent},
  {
    path: 'consultant', component: ConsultantComponent,
    children: [
      {path: 'mess/:id', component: MessageConsultantComponent}
    ]
  },
  // Danh
  {
    path: 'admin', component: AdminComponent,
    children: [
      {
        path: 'information', component: InformationAdminComponent
      },
      {
        // Nhật mới
        path: 'report', component: BaoCaoComponentComponent,
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

  // Đăng:caca
  {path: 'list-pending-ticket', component: ListPendingTicketComponent},
  {path: 'search-pending-ticket', component: SearchPendingTicketComponent},
  // Ngân
  {path: 'promotion', component: PromotionListForCustomerComponent},
  // Mai :
  {path: 'list-employee', component: ListEmployeeComponent},
  {path: 'list-employee/create-employee', component: CreateEmployeeComponent},
  {path: 'list-employee/edit-employee/:id', component: EditEmployeeComponent},
  {path: 'delete-employee', component: DeleteEmployeeComponent},
  {path: 'message-notice-employee', component: MessageNoticeEmployeeComponent},

  // Châu :
  {path: 'list-ticket', component: ListTicketComponent},
  {path: 'print-ticket/:id', component: PrintTicketComponent},
  {path: 'input-ticket-sell/:idFlightDeparture/:idFlightArrival', component: InputTicketSellComponent},
  {
    path: 'print-ticket-two-way/:bookingCode/:passengerList/:flightDeparture/:flightArrival',
    component: PrintTicketTwoWayComponent
  },
  {path: 'notice-page', component: NoticePageComponent},
  // PQ Khánh:
  {path: 'checkin-online', component: CheckinOnlineComponent},
  {path: 'promotion-code', component: PromotionCodeComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule, ReactiveFormsModule, MaterialModule,
    MatDialogModule, FormsModule, NgxPaginationModule],
  exports: [RouterModule],
  declarations: [ListEmployeeComponent, CreateEmployeeComponent, EditEmployeeComponent, DeleteEmployeeComponent,
    EmployeeComponent, EditTicketComponent, InputTicketSellComponent, PrintTicketTwoWayComponent, NoticePageComponent,
    MessageNoticeEmployeeComponent, CheckinOnlineComponent, PromotionCodeComponent
  ]
})
export class AppRoutingModule {
}
