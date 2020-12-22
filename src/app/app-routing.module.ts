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
import {PromotionListComponent} from './components/promotion/promotion-list/promotion-list.component';
// tslint:disable-next-line:max-line-length
import {BaoCaoComponentComponent} from './components/report-statistic/bao-cao-thong-ke/bao-cao/bao-cao-component/bao-cao-component.component';
import {ListTicketComponent} from './components/list-ticket/list-ticket.component';
import {EditTicketComponent} from './components/edit-ticket/edit-ticket.component';
import {MatInputModule} from '@angular/material/input';
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
import {PromotionCodeComponent} from './components/promotion-code/promotion-code.component';
import {AddNewComponent} from './components/promotion/promotion-list/add-new/add-new.component';
import {EditComponent} from './components/promotion/promotion-list/edit/edit.component';
import {MonComponent} from './components/promotion/days/mon/mon.component';
import {TuesComponent} from './components/promotion/days/tues/tues.component';
import {WedsComponent} from './components/promotion/days/weds/weds.component';
import {ThursComponent} from './components/promotion/days/thurs/thurs.component';
import {FriComponent} from './components/promotion/days/fri/fri.component';
import {SatComponent} from './components/promotion/days/sat/sat.component';
import {SunComponent} from './components/promotion/days/sun/sun.component';
import {DadSgnComponent} from './components/promotion/flights/dad-sgn/dad-sgn.component';
import {DeleteComponent} from './components/promotion/promotion-list/delete/delete.component';
import {Ng2SearchPipeModule} from 'ng2-search-filter';

const routes: Routes = [
  // Quân :
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'verification-email', component: VerificationEmailComponent},
  // Vinh
  {path: 'message', component: MessUserComponent},
  {path: 'send-feedback', component: SendFeedbackComponent},
  {path: 'consultant', component: ConsultantComponent,
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
  {path: 'promotion-for-customer', component: PromotionCodeComponent},
  {path: 'promotion-for-admin', component: PromotionListComponent},
  {path: 'add-new-promotion', component: AddNewComponent},
  {path: 'update-promotion/:id', component: EditComponent},
  {path: 'mon', component: MonComponent},
  {path: 'tues', component: TuesComponent},
  {path: 'weds', component: WedsComponent},
  {path: 'thurs', component: ThursComponent},
  {path: 'fri', component: FriComponent},
  {path: 'sat', component: SatComponent},
  {path: 'sun', component: SunComponent},
  {path: 'dad-sgn', component: DadSgnComponent},
  // Mai :
  {path: 'list-employee', component: ListEmployeeComponent},
  {path: 'list-employee/create-employee', component: CreateEmployeeComponent},
  {path: 'list-employee/edit-employee/:id', component: EditEmployeeComponent},
  {path: 'delete-employee', component: DeleteEmployeeComponent},
  {path: 'message-notice-employee', component: MessageNoticeEmployeeComponent},

  // Châu :
  {path: 'list-ticket', component: ListTicketComponent},
  {path: 'input-ticket-sell/:idFlightDeparture/:idFlightArrival', component: InputTicketSellComponent},
  {path: 'print-ticket/:id', component: PrintTicketComponent},
  {
    path: 'print-ticket-two-way/:bookingCode/:passengerList/:flightDeparture/:flightArrival',
    component: PrintTicketTwoWayComponent
  },
  {path: 'notice-page', component: NoticePageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule, ReactiveFormsModule, MaterialModule,
    MatDialogModule, FormsModule, NgxPaginationModule, Ng2SearchPipeModule],
  exports: [RouterModule],
  declarations: [ListEmployeeComponent, CreateEmployeeComponent, EditEmployeeComponent, DeleteEmployeeComponent,
    EmployeeComponent, EditTicketComponent, InputTicketSellComponent, PrintTicketTwoWayComponent, NoticePageComponent,
    MessageNoticeEmployeeComponent, PromotionCodeComponent, PromotionListComponent, PromotionListForCustomerComponent, AddNewComponent,
    EditComponent, MonComponent, TuesComponent, WedsComponent, ThursComponent, FriComponent, SatComponent, SunComponent, DadSgnComponent,
    DeleteComponent
  ]
})
export class AppRoutingModule { }
