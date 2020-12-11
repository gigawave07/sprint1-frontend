import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  readonly API = "http://localhost:8080/authenticate";

  constructor(public http: HttpClient) { }

  authenticate(user): Observable<any> {
    return this.http.post(this.API, user);
  }
}
