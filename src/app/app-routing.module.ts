import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {VerificationEmailComponent} from './components/verification-email/verification-email.component';
import {InformationAdminComponent} from './components/information-admin/information-admin.component';
import {AdminComponent} from './components/admin/admin.component';
import {ChangePasswordSuccessfullyComponent} from './components/change-password-successfully/change-password-successfully.component';
import {GetTokenEmailAdminComponent} from './components/get-token-email-admin/get-token-email-admin.component';
import {GetCheckPasswordAdminComponent} from './components/get-check-password-admin/get-check-password-admin.component';


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
      },
      {
        path: 'change-password-successfully', component: ChangePasswordSuccessfullyComponent
      },
      {
        path: 'get-token-email', component: GetTokenEmailAdminComponent
      },
      {
        path: 'get-check-password', component: GetCheckPasswordAdminComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
