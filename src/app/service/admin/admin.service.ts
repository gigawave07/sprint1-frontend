import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  public API = 'http://localhost:8080/admin/findById/';

  public API_CHANGE_PASSWORD = 'http://localhost:8080/changePassword/findAppAccountByUsername/';

  public API_SAVE_PASSWORD = 'http://localhost:8080/changePassword/saveAppAccount/';

  constructor(public http: HttpClient) {
  }

  getAdminByIdService(idAdmin: any): Observable<any> {
    return this.http.get(this.API + idAdmin);
  }

  findAppAccountService(username): Observable<any> {
    // @ts-ignore
    return this.http.get(this.API_CHANGE_PASSWORD + username);
  }

  savePasswordAdminService(username, account): Observable<any> {
    // @ts-ignore
    return this.http.put(this.API_SAVE_PASSWORD + username, account);
  }
}

