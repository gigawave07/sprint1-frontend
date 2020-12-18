import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  public readonly API: string = 'http://localhost:8080/user';
  public readonly API_USER: string = 'http://localhost:8080/change';

  constructor(
    private http: HttpClient,
  ) {
  }

  getAllUser(): Observable<any> {
    return this.http.get(this.API);
  }

  getUserById(userId): Observable<any> {
    return this.http.get(this.API + '/detail/' + userId);
  }

  editUser(idUser, user): Observable<any> {
    return this.http.put(this.API + '/edit/' + idUser, user);
  }

  changePassword(idUser, password): Observable<any> {
    return this.http.put(this.API_USER + '/' + idUser + '/password', password);
  }
}
