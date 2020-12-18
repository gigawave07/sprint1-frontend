import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, timer} from 'rxjs';
import {AbstractControl, AsyncValidatorFn} from '@angular/forms';
import {map, switchMap} from 'rxjs/operators';
import {TicketStatusPaymentDTO} from '../../model/TicketStatusPaymentDTO';

const API = 'http://localhost:8080/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  protected readonly API: string = 'http://localhost:8080/ticket';

  constructor(
    protected http: HttpClient
  ) {
  }

  getAllTicketService(): Observable<any> {
    return this.http.get(this.API + '/list');
  }

  /*
  * Đăng start
  * */
  findAllPendingTicket(): Observable<any> {
    return this.http.get(this.API + '/list/Pending');
  }

  setTicketStatusPayment(id: number, ticketStatusPaymentDTO: TicketStatusPaymentDTO): Observable<any> {
    // console.log(this.API + '/set-status-payment/' + id, ticketStatusPaymentDTO);
    return this.http.put(this.API + '/set-status-payment/' + id, ticketStatusPaymentDTO);
  }

  searchTicket(ticketSearchDTO: any): Observable<any> {
    // console.log('ticketSearchDTO');
    // console.log(ticketSearchDTO);
    // console.log('URL');
    // console.log(this.API + '/search?' + 'statusPaymentName=' + ticketSearchDTO.statusPaymentName +
    // 	'&searchBy=' + ticketSearchDTO.searchBy + '&searchValue=' + ticketSearchDTO.searchValue);
    // return this.http.get(this.API + '/list/Pending');
    return this.http.get(this.API + '/search?' +
      'statusPaymentName=' + ticketSearchDTO.statusPaymentName +
      '&searchBy=' + ticketSearchDTO.searchBy +
      '&searchValue=' + ticketSearchDTO.searchValue);
  }

  /*
  * Đăng end
  * */



  /**
   * Chau start
   */
  getAllAppUserService(): Observable<any> {
    return this.http.get(this.API + '/app-user-list');
  }

  findTicketByIDService(idFind: any): Observable<any> {
    return this.http.get(this.API + '/find-by-id/' + idFind);
  }

  findFlightInformationByIDService(idFind: any): Observable<any> {
    return this.http.get(this.API + '/find-flight-information-by-id/' + idFind);
  }

  deleteTicketService(idDelete: any): Observable<any> {
    return this.http.delete(this.API + '/delete/' + idDelete);
  }

  editTicketService(idEdit, passengerEdit, appUserEdit, ticketEdit): Observable<any> {
    return this.http.put(this.API + '/edit/' + idEdit + '/' + passengerEdit + '/' + appUserEdit, ticketEdit);
  }

  saveTicketService(idFlightInformationDeparture, idFlightInformationArrival, ticket): Observable<any> {
    return this.http.post(this.API + '/save/' + idFlightInformationDeparture + '/' +
      idFlightInformationArrival, ticket);
  }

  validateEmailUser(): AsyncValidatorFn {
    return (control: AbstractControl): Observable<{ [key: string]: any } | null> => {
      return this.searchEmailUser(control.value)
        .pipe(
          map(res => {
            if (!res.length) {
              return {emailUserExists: true};
            }
          })
        );
    };
  }

  searchEmailUser(emailUser) {
    return timer(50)
      .pipe(
        switchMap(() => {
          return this.http.get<any>(API + '/app-user/' + emailUser);
        })
      );
  }

  openNewWindow() {
    return window;
  }
  /**
   * Chau end
   */
}
