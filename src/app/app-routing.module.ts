import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {MessUserComponent} from './components/mess-user/mess-user.component';
import {SendFeedbackComponent} from './components/send-feedback/send-feedback.component';
import {ConsultantComponent} from './components/consultant/consultant.component';
import {MessageConsultantComponent} from './components/consultant/message-consultant/message-consultant.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'message', component: MessUserComponent},
  {path: 'sendFeedback', component: SendFeedbackComponent},
  {path: 'consultant', component: ConsultantComponent,
    children: [
      {path: 'mess/:id', component: MessageConsultantComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
