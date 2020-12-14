import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  public readonly API: string = 'http://localhost:8080/user/detail-user';

  constructor(
    private http: HttpClient
  ) {}
  getAllUser(): Observable<any> {
    return this.http.get(this.API);
  }
  getUserById(userId): Observable<any> {
    return this.http.get(this.API + '/' + userId);
  }
  editUser(user, userId) {
    return this.http.put(this.API + '/' + userId, user);
  }
}
