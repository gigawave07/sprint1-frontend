import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  public readonly API: string = 'http://localhost:8080/ticket';

  constructor(
    public http: HttpClient
  ) { }

  getAllTicketService(): Observable<any> {
    return this.http.get(this.API + '/list');
  }

  deleteTicketService(idDelete: any): Observable<any> {
    return this.http.delete(this.API + '/delete/' + idDelete);
  }

  findTicketByIDService(idFind: any): Observable<any> {
    return this.http.get(this.API + '/findTicketByID/' + idFind);
  }
}
