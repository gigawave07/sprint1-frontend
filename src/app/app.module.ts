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
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {VerificationEmailComponent} from './components/verification-email/verification-email.component';
import {AuthInterceptor} from './service/AuthInterceptor';
import {SpinnerComponent} from './components/spinner/spinner.component';
import {SpinnerOverlayComponent} from './components/spinner-overlay/spinner-overlay.component';
import {NgxLoadingModule} from 'ngx-loading';
import {NgxPaginationModule} from 'ngx-pagination';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {AdminComponent} from './components/admin/admin.component';
import {InformationAdminComponent} from './components/information-admin/information-admin.component';
import {ChangePasswordAdminComponent} from './components/change-password-admin/change-password-admin.component';
import {ChangePasswordSuccessfullyComponent} from './components/change-password-successfully/change-password-successfully.component';

@NgModule({
  declarations: [
    AppComponent,
    // Quân
    HomeComponent, LoginComponent, RegisterComponent, NavBarComponent, FooterComponent, VerificationEmailComponent,
    SpinnerComponent, SpinnerOverlayComponent,
    // Danh
    AdminComponent, InformationAdminComponent, ChangePasswordAdminComponent, ChangePasswordSuccessfullyComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, MaterialModule, HttpClientModule, NgxPaginationModule, Ng2SearchPipeModule,
    FormsModule, MatDialogModule, ReactiveFormsModule, NgxLoadingModule.forRoot({})],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent],
  entryComponents: [SpinnerOverlayComponent]
})
export class AppModule {
}
