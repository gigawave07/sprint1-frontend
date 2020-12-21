import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PassengerService {
  public readonly API: string = 'http://localhost:8080/rest';
  private apiDin = 'http://localhost:8080/rest/passengers';
  private apiSentMail = 'http://localhost:8080/rest/sent-mail?idAccount=';


  constructor(public http: HttpClient) {
  }// @ts-ignore
   // khi gọi hàm search gửi đến list kết quả
  search(page, by, search): Observable<any> {
    console.log(this.API + '/passengers' + '?by=' + by + '&search=' + search + '&page=' + page);
    return this.http.get(this.API + '/passengers' + '?by=' + by + '&search=' + search + '&page=' + page);
  }


  getLuggage(): Observable<any> {
    return this.http.get(this.API + '/luggages');
  }

  create(data): Observable<any> {
    return this.http.post(this.API + '/passengers', data);
  }

  update(id, data): Observable<any> {
    return this.http.put(`${this.API + '/passengers'}/${id}`, data);
  }

  delete(id): Observable<any> {
    console.log(this.http.delete(`${this.API + '/passenger'}/${id}`));
    return this.http.delete(`${this.API + '/passengers'}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(this.API + '/deleteMultiple');
  }
  getById(id): Observable<any> {
    return this.http.get(this.API + '/passengers' + '/' + id);
  }

  addPassenger(passenger): Observable<any> {
    return this.httpClient.post(this.apiDin, passenger);
  }

  sentEmail(id): Observable<any> {
    return this.httpClient.get(this.apiSentMail + id);
  }
}
