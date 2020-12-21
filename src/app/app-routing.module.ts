import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SearchFlightInformationComponent} from './components/flight/search-flight-information/search-flight-information.component';
import {PaymentHistoryComponent} from './components/flight/payment-history/payment-history/payment-history.component';


const routes: Routes = [
  // Đin
  {path: 'search', component: SearchFlightInformationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
