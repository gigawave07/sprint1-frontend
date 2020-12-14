import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserMessService {

  private baseUrl = 'http://localhost:8080/';

  constructor(private http: HttpClient) {
  }

  public getListUser(): Observable<any> {
    return this.http.get(this.baseUrl + 'user-chat');
  }
}
