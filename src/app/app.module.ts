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
import {SendFeedbackComponent} from './components/send-feedback/send-feedback.component';
import {MessUserComponent} from './components/mess-user/mess-user.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MessageService} from './service/message.service';
import {HttpClientModule} from '@angular/common/http';
import {ConsultantComponent} from './components/consultant/consultant.component';
import {FeedbackService} from './service/feedback.service';
import {UserMessService} from './service/user-mess.service';
import {MessageConsultantComponent} from './components/consultant/message-consultant/message-consultant.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NavBarComponent,
    FooterComponent,
    SendFeedbackComponent,
    MessUserComponent,
    ConsultantComponent,
    MessageConsultantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [MessageService, FeedbackService, UserMessService],
  bootstrap: [AppComponent]
})
export class AppModule { }
