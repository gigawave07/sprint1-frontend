import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PassengerService {
  private api = 'http://localhost:8080/rest/passengers';
  private apiSentMail = 'http://localhost:8080/rest/sent-mail?idAccount=';

  constructor(private httpClient: HttpClient) {
  }

  addPassenger(passenger): Observable<any> {
    return this.httpClient.post(this.api, passenger);
  }

  sentEmail(id): Observable<any> {
    return this.httpClient.get(this.apiSentMail + id);
  }
}
