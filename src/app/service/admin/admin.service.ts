import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  public API_GET_INFO_ADMIN = 'http://localhost:8080/admin/findById/';

  public API_GET_APP_ACCOUNT = 'http://localhost:8080/changePassword/findAppAccountByUsername/';

  public API_SAVE_PASSWORD = 'http://localhost:8080/changePassword/saveAppAccount/';

  constructor(public http: HttpClient) {
  }

  // get information admin
  getAdminByIdService(idAdmin: any): Observable<any> {
    return this.http.get(this.API_GET_INFO_ADMIN + idAdmin);
  }

  // get object AppAccount
  findAppAccountService(username): Observable<any> {
    return this.http.get(this.API_GET_APP_ACCOUNT + username);
  }

  // save object AppAccount && password
  savePasswordAdminService(username, account): Observable<any> {
    return this.http.put(this.API_SAVE_PASSWORD + username, account);
  }
}

