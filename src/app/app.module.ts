import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {MaterialModule} from './material.module';
import {NavBarComponent} from './components/nav-bar/nav-bar.component';
import {FooterComponent} from './components/footer/footer.component';
import {InputTicketSellComponent} from './components/input-ticket-sell/input-ticket-sell.component';
import {DeleteTicketComponent} from './components/delete-ticket/delete-ticket.component';
import {EditTicketComponent} from './components/edit-ticket/edit-ticket.component';
import {PrintTicketComponent} from './components/print-ticket/print-ticket.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ListTicketComponent} from './components/list-ticket/list-ticket.component';
import {ListPendingTicketComponent} from './components/list-pending-ticket/list-pending-ticket/list-pending-ticket.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CancelPendingTicketComponent} from './components/list-pending-ticket/cancel-pending-ticket/cancel-pending-ticket.component';
import {MatDialogModule} from '@angular/material/dialog';
import { SearchPendingTicketComponent } from './components/search-pending-ticket/search-pending-ticket/search-pending-ticket.component';
import {VerificationEmailComponent} from './components/verification-email/verification-email.component';
import { AuthInterceptor } from './service/AuthInterceptor';
import {TrangChinhComponent} from './components/report-statistic/bao-cao-thong-ke/trang-chinh/trang-chinh.component';
// tslint:disable-next-line:max-line-length
import {BaoCaoComponentComponent} from './components/report-statistic/bao-cao-thong-ke/bao-cao/bao-cao-component/bao-cao-component.component';
import {TrangChuThongKeComponent} from './components/report-statistic/bao-cao-thong-ke/thong-ke/demo/trang-chu-thong-ke.component';
import {KetQuaComponent} from './components/report-statistic/bao-cao-thong-ke/thong-ke/ket-qua/ket-qua/ket-qua.component';
import {KetQuaTableComponent} from './components/report-statistic/bao-cao-thong-ke/thong-ke/ket-qua/ket-qua-table/ket-qua-table.component';
// tslint:disable-next-line:max-line-length
import {KetQuaSaiLogicComponent} from './components/report-statistic/bao-cao-thong-ke/thong-ke/ket-qua/ket-qua-sai-logic/ket-qua-sai-logic.component';
import {ChartsModule} from 'ng2-charts';
import {ExcelService} from './components/report-statistic/service/excel.service';
import {AdminComponent} from "./components/admin/admin.component";

// @ts-ignore
// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    // Quân
    HomeComponent, LoginComponent, RegisterComponent, NavBarComponent, FooterComponent, VerificationEmailComponent,
    // Châu
    InputTicketSellComponent, DeleteTicketComponent, EditTicketComponent, PrintTicketComponent, ListTicketComponent,
      // Đăng
    ListPendingTicketComponent, CancelPendingTicketComponent, SearchPendingTicketComponent,
    // Nhật
    TrangChinhComponent, BaoCaoComponentComponent, TrangChuThongKeComponent,
    KetQuaComponent, KetQuaTableComponent, KetQuaSaiLogicComponent, AdminComponent
  ],
  // tslint:disable-next-line:max-line-length
  imports: [BrowserModule, AppRoutingModule, MaterialModule, HttpClientModule, FormsModule, MatDialogModule, ReactiveFormsModule,
    ReactiveFormsModule, ChartsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }, ExcelService
  ],
  entryComponents: [TrangChinhComponent, BaoCaoComponentComponent, TrangChuThongKeComponent,
    KetQuaComponent, KetQuaTableComponent, KetQuaSaiLogicComponent ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
