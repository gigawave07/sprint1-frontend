import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  public API = 'http://localhost:8080/rest';
  public API_CHANGE_PASSWORD = 'http://localhost:8080/changePassword/findAppAccountByUsername/';
  public API_SAVE_PASSWORD = 'http://localhost:8080/changePassword/saveAppAccount/';
  constructor(public http: HttpClient) {
  }
  getEmployeeByIdService(idEmployee: number): Observable<any> {
    return this.http.get(this.API + '/employees' + '/' + idEmployee);
  }
}
