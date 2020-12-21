import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  public readonly API: string = 'http://localhost:8080/ticket';
  public apiAdd = 'http://localhost:8080/ticket/add';
  public apiTicket = 'http://localhost:8080/ticket/find-ticket-app-user';

  constructor(
    public http: HttpClient
  ) {
  }

  getAllTicketByAppAccount(idAccount, page): Observable<any> {
    return this.http.get(this.apiTicket + '/' + idAccount + '/' + page);
  }

  addTicketAndBooking(daoTicket): Observable<any> {
    return this.http.post(this.apiAdd, daoTicket);
  }

  getAllTicketService(): Observable<any> {
    return this.http.get(this.API + '/list');
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

}
