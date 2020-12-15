import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, timer} from 'rxjs';
import {AbstractControl, AsyncValidatorFn} from '@angular/forms';
import {map, switchMap} from 'rxjs/operators';

const API = 'http://localhost:8080/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  public readonly API: string = 'http://localhost:8080/ticket';

  constructor(
    public http: HttpClient
  ) {
  }

  getAllTicketService(): Observable<any> {
    return this.http.get(this.API + '/list');
  }

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
}
