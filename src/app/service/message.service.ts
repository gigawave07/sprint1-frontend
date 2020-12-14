import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private baseUrl = 'http://localhost:8080/';

  constructor(private http: HttpClient) {
  }

  public sendRequestChat(userRequest): Observable<any> {
    return this.http.post(this.baseUrl + 'request-chat', userRequest);
  }

  public sendMess(message): Observable<any> {
    return this.http.post(this.baseUrl + 'send-mess', message);
  }

  public getMess(): Observable<any> {
    return this.http.get(this.baseUrl + 'mess-user');
  }
}
