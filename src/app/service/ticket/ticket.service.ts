import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  public readonly API: string = 'http://localhost:8080/ticket';
  private searchTicketSubject = new BehaviorSubject(null);
  private searchTicketDepSubject = new BehaviorSubject(null);
  private dateDeparture;
  private arrival;
  private departure;
  private dateArrival;
  private airline;
  private radio;
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
  searchTicketEmptyService(departure, arrival, departureDate, arrivalDate, airline) {
    this.dateDeparture = departureDate;
    this.dateArrival = arrivalDate;
    this.airline = airline;
    this.arrival = arrival;
    this.departure = departure;
    this.http.get(
      this.API + '/searchTicketEmpty/' + departure + '/' + arrival + '/' + departureDate + '/' + arrivalDate + '/' + airline).subscribe(
        data => {
      this.searchTicketSubject.next(data);
    });
  }
  searchTicketEmptyDepService(departure, arrival, departureDate, airline) {
    this.dateDeparture = departureDate;
    this.airline = airline;
    this.arrival = arrival;
    this.departure = departure;
    this.http.get(
      this.API + '/searchTicketDepEmpty/' + departure + '/' + arrival + '/' + departureDate + '/' + airline).subscribe(
      data => {
        this.searchTicketDepSubject.next(data);
      });
  }
  get(radio) {
   return this.radio = radio;
  }
  getRadio() {
    return this.radio;
  }
  getDateArrival() {
    return this.dateArrival;
  }
  getAirline() {
    return this.airline;
  }
  getArrival() {
    return this.arrival;
  }
  getDeparture() {
    return this.departure;
  }
  getDateDeparture() {
    return this.dateDeparture;
  }
  getSearchTicketEmpty() {
    return this.searchTicketSubject.asObservable();
  }
  getSearchTicketDepEmpty() {
    return this.searchTicketDepSubject.asObservable();
  }
}
