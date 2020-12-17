import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  public readonly API: string = 'http://localhost:8080/ticket';

  constructor(
    public http: HttpClient
  ) { }

  getAllTicketService(pageIndex): Observable<any> {
    return this.http.get(this.API + '/list' + '?page=' + pageIndex);
  }

  deleteTicketService(idDelete: any): Observable<any> {
    return this.http.delete(this.API + '/delete/' + idDelete);
  }

  findTicketByIDService(idFind: any): Observable<any> {
    return this.http.get(this.API + '/findTicketByID/' + idFind);
  }

  // Đăng
  findAllPendingTicket(): Observable<any> {
    return this.http.get(this.API + '/list-pending');
  }

  cancelPendingTicket(id, ticket): Observable<any> {
    return this.http.put(this.API + '/cancel/pending/' + id, ticket);
  }
  searchTicketService(key, inputSearch): Observable<any> {
    return this.http.get(this.API + '/search/' + inputSearch + '/' + key);
  }
  searchTicketEmptyService(departure, arrival, departureDate, arrivalDate, airline): Observable<any> {
    return this.http.get(this.API + '/searchTicketEmpty/' + departure + '/' + arrival + '/' + departureDate + '/' + arrivalDate + '/' + airline);
  }
}
